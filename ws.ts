// deno-lint-ignore-file
import { func_IsSpaceMember, func_ResolvePolicyByKind } from "./resolvers/policy.ts";
import { atobSafe, DefaultPolicy } from "./main.ts";
import { func_WriteRegularEvent, func_WriteReplaceableEvent } from "./resolvers/event.ts";

import { func_GetEventsByFilter } from "./resolvers/event.ts";
import { func_DeleteEvent } from "./resolvers/event_deletion.ts";
import {
    _RelayResponse_EOSE,
    _RelayResponse_Event,
    _RelayResponse_Notice,
    _RelayResponse_OK,
    ClientRequest_Event,
    ClientRequest_Message,
    ClientRequest_REQ,
    getTags,
    NostrEvent,
    NostrFilter,
    NostrKind,
    parseJSON,
    PublicKey,
    verifyEvent,
} from "@blowater/nostr-sdk";

export const ws_handler = (
    args: {
        connections: Map<WebSocket, SubscriptionMap>;
        default_policy: DefaultPolicy;
        resolvePolicyByKind: func_ResolvePolicyByKind;
        get_events_by_filter: func_GetEventsByFilter;
        write_regular_event: func_WriteRegularEvent;
        write_replaceable_event: func_WriteReplaceableEvent;
        delete_event: func_DeleteEvent;
        is_space_member: func_IsSpaceMember;
        auth_required: boolean;
    },
) =>
async (req: Request, info: Deno.ServeHandlerInfo) => {
    const { connections } = args;

    if (req.headers.get("upgrade") != "websocket") {
        return new Response(null, { status: 501 });
    }

    const { socket, response } = Deno.upgradeWebSocket(req);

    socket.onopen = ((socket: WebSocket) => async (e) => {
        console.log("a client connected!", info.remoteAddr);
        if (args.auth_required) {
            const url = new URL(req.url);
            const auth = url.searchParams.get("auth");
            if (auth == null || auth == "") {
                // https://www.rfc-editor.org/rfc/rfc6455.html#section-7.4
                // https://www.iana.org/assignments/websocket/websocket.xml#close-code-number
                console.error(url, "no auth event found");
                socket.close(3000, "no auth event found");
                return;
            }
            const rawEvent = atobSafe(auth);
            if (rawEvent instanceof Error) {
                console.error(rawEvent);
                socket.close(3000, rawEvent.message);
                return;
            }
            const event = parseJSON<NostrEvent>(rawEvent);
            if (event instanceof Error) {
                console.error(event);
                socket.close(3000, "invalid auth event format");
                return;
            }

            const ok = await args.is_space_member(event.pubkey);
            if (!ok) {
                socket.close(3000, `pubkey ${event.pubkey} is not allowed`);
                return;
            }
        }
        connections.set(socket, new Map());
    })(socket);

    socket.onclose = ((socket: WebSocket) => (e) => {
        console.log("client disconnected", info.remoteAddr);
        connections.delete(socket);
    })(socket);

    socket.onmessage = onMessage({
        ...args,
        this_socket: socket,
        connections,
    });

    return response;
};

export type SubscriptionMap = Map<string, Subscription>;
export type Subscription = {
    filter: NostrFilter;
    eventSent: number;
}[];

function send_event_to_subscription(ws: WebSocket, event: NostrEvent, sub_id: string, filter: {
    filter: NostrFilter;
    eventSent: number;
}) {
    if ((filter.filter.limit && filter.eventSent < filter.filter.limit) || filter.filter.limit == undefined) {
        ws.send(JSON.stringify(respond_event(sub_id, event)));
        filter.eventSent++;
        return true;
    }
    return false;
}

function onMessage(
    deps: {
        this_socket: WebSocket;
        connections: Map<WebSocket, SubscriptionMap>;
        default_policy: DefaultPolicy;
        resolvePolicyByKind: func_ResolvePolicyByKind;
        get_events_by_filter: func_GetEventsByFilter;
        write_regular_event: func_WriteRegularEvent;
        write_replaceable_event: func_WriteReplaceableEvent;
        delete_event: func_DeleteEvent;
    },
) {
    const { this_socket, connections } = deps;

    return async (event: MessageEvent<string>) => {
        const nostr_ws_msg = parseJSON<ClientRequest_Message>(event.data);
        if (nostr_ws_msg instanceof Error) {
            console.error(nostr_ws_msg);
            return;
        }
        if (!(nostr_ws_msg instanceof Array)) {
            console.error("should be an array:", nostr_ws_msg);
            return;
        }
        const cmd = nostr_ws_msg[0];
        if (cmd == "EVENT") {
            const err = await handle_cmd_event({
                ...deps,
                this_socket,
                connections,
                nostr_ws_msg,
            });
            if (err instanceof Error) {
                console.error(err);
            }
        } else if (cmd == "REQ") {
            const err = await handle_cmd_req(nostr_ws_msg, { ...deps, this_socket });
            if (err instanceof Error) {
                console.error(err);
            }
        } else if (cmd == "CLOSE") {
        } else {
            console.log("not implemented", event.data);
        }
    };
}

async function handle_cmd_event(args: {
    this_socket: WebSocket;
    connections: Map<WebSocket, SubscriptionMap>;
    nostr_ws_msg: ClientRequest_Event;
    resolvePolicyByKind: func_ResolvePolicyByKind;
    write_regular_event: func_WriteRegularEvent;
    write_replaceable_event: func_WriteReplaceableEvent;
    delete_event: func_DeleteEvent;
}) {
    const { this_socket, connections, nostr_ws_msg, resolvePolicyByKind } = args;
    const event = nostr_ws_msg[1];
    {
        const ok = await verifyEvent(event);
        if (!ok) {
            return send(
                this_socket,
                JSON.stringify(respond_ok(event, false, "invalid event")),
            );
        }
    }

    const policy = await resolvePolicyByKind(event.kind);
    if (policy instanceof Error) {
        return policy;
    }
    { // check if allowed to write
        const author = PublicKey.FromHex(event.pubkey) as PublicKey;
        if (policy.write) {
            if (policy.block.has(author.hex)) {
                return send(
                    this_socket,
                    JSON.stringify(
                        respond_ok(
                            event,
                            false,
                            "this pubkey is blocked",
                        ),
                    ),
                );
            }
        } else {
            if (!policy.allow.has(author.hex) && !policy.allow.has(author.hex)) {
                return send(
                    this_socket,
                    JSON.stringify(
                        respond_ok(
                            event,
                            false,
                            `kind ${event.kind} is blocked`,
                        ),
                    ),
                );
            }
        }
    }

    if (event.kind == NostrKind.DELETE) {
        for (const e of getTags(event).e) {
            const ok = await args.delete_event(e);
            if (!ok) {
                console.error("failed to delete", e);
            }
        }
    }

    let ok: boolean | Error;
    if (
        event.kind == NostrKind.META_DATA || event.kind == NostrKind.CONTACTS ||
        (10000 <= event.kind && event.kind < 20000)
    ) {
        ok = await args.write_replaceable_event(event);
    } else {
        ok = await args.write_regular_event(event);
    }

    if (ok instanceof Error) {
        console.error(ok);
        send(this_socket, JSON.stringify(respond_ok(event, false, ok.message)));
        return;
    } else if (ok) {
        send(this_socket, JSON.stringify(respond_ok(event, true, "")));
    } else {
        send(this_socket, JSON.stringify(respond_ok(event, false, "")));
    }
    for (
        const matched of matchEventWithSubscriptions(
            event,
            connections,
        )
    ) {
        const pub = PublicKey.FromHex(event.pubkey) as PublicKey;
        if (policy.read == false && !policy.allow.has(event.pubkey) && !policy.allow.has(pub.hex)) {
            return;
        }
        send_event_to_subscription(matched.socket, event, matched.sub_id, matched.filter);
    }
}

async function handle_cmd_req(
    nostr_ws_msg: ClientRequest_REQ,
    args: {
        this_socket: WebSocket;
        connections: Map<WebSocket, SubscriptionMap>;
        resolvePolicyByKind: func_ResolvePolicyByKind;
        get_events_by_filter: func_GetEventsByFilter;
    },
) {
    const { this_socket } = args;
    const sub_id = nostr_ws_msg[1];
    const filters = nostr_ws_msg.slice(2) as NostrFilter[];

    const subscriptions = args.connections.get(this_socket);
    if (subscriptions) {
        if (subscriptions.size > 10) {
            send(
                this_socket,
                JSON.stringify(respond_notice(`${sub_id}:only accept at most 10 subscriptions`)),
            );
            return;
        }
        subscriptions.set(
            sub_id,
            filters.map((f) => {
                return {
                    filter: f,
                    eventSent: 0,
                };
            }),
        );
    }

    // query this filter
    for (const filter of filters) {
        const event_candidates = await args.get_events_by_filter(filter);
        if (event_candidates instanceof Error) {
            return event_candidates;
        }
        for (const event of event_candidates) {
            const policy = await args.resolvePolicyByKind(event.kind);
            if (policy instanceof Error) {
                return policy;
            }
            if (policy.read == false && !policy.allow.has(event.pubkey)) {
                continue;
            }
            send(this_socket, JSON.stringify(respond_event(sub_id, event)));
        }
    }

    return send(this_socket, JSON.stringify(respond_eose(sub_id)));
}

function respond_event(
    sub_id: string,
    event: NostrEvent,
): _RelayResponse_Event {
    return ["EVENT", sub_id, event];
}

function respond_ok(
    event: NostrEvent,
    ok: boolean,
    message: string,
): _RelayResponse_OK {
    return ["OK", event.id, ok, message];
}

function respond_eose(sub_id: string): _RelayResponse_EOSE {
    return ["EOSE", sub_id];
}

function respond_notice(message: string): _RelayResponse_Notice {
    return ["NOTICE", message];
}

function* matchEventWithSubscriptions(
    event: NostrEvent,
    connections: Map<WebSocket, SubscriptionMap>,
) {
    for (const [socket, subscriptions] of connections) {
        for (const [sub_id, filters] of subscriptions) {
            const matched_filter = isMatched(event, filters);
            if (matched_filter) {
                yield {
                    socket,
                    sub_id,
                    event,
                    filter: matched_filter,
                };
            }
        }
    }
}

function isMatched(event: NostrEvent, subscription: Subscription) {
    for (const _filter of subscription) {
        const filter = _filter.filter;
        const kinds = filter.kinds || [];
        const authors = filter.authors || [];
        const ids = filter.ids || [];
        const ps = filter["#p"] || [];
        const es = filter["#e"] || [];

        const match_kind = kinds.length == 0 ? true : kinds.includes(event.kind);
        const match_author = authors.length == 0 ? true : authors.includes(event.pubkey);
        const match_id = ids.length == 0 ? true : ids.includes(event.id);
        const match_p_tag = ps.length == 0 ? true : ps.includes(event.pubkey);
        const match_e_tag = es.length == 0 ? true : es.includes(event.id);
        const res = (
            match_kind &&
            match_author &&
            match_id &&
            match_p_tag &&
            match_e_tag
        ) ||
            (kinds.length == 0 && authors.length == 0 && ids.length == 0 &&
                ps.length == 0 && es.length == 0);
        // filter.since
        // filter.until

        if (res) {
            return _filter;
        }
    }
}

function send(socket: WebSocket, data: string) {
    if (socket.readyState == socket.OPEN) {
        socket.send(data);
    }
}
