// deno-lint-ignore-file
import { func_ResolvePolicyByKind } from "./resolvers/policy.ts";
import { DefaultPolicy, EventReadWriter } from "./main.tsx";
import {
    func_GetEventsByAuthors,
    func_GetEventsByFilter,
    func_GetEventsByIDs,
    func_GetEventsByKinds,
    func_WriteEvent,
} from "./resolvers/event.ts";
import {
    _RelayResponse_EOSE,
    _RelayResponse_Event,
    _RelayResponse_Notice,
    _RelayResponse_OK,
    ClientRequest_Event,
    ClientRequest_Message,
    ClientRequest_REQ,
    NostrEvent,
    NostrFilter,
    PublicKey,
    verifyEvent,
} from "./_libs.ts";

export const ws_handler = (
    args: {
        connections: Map<WebSocket, SubscriptionMap>;
        default_policy: DefaultPolicy;
        resolvePolicyByKind: func_ResolvePolicyByKind;
    } & EventReadWriter,
) =>
(req: Request, info: Deno.ServeHandlerInfo) => {
    const { connections } = args;

    if (req.headers.get("upgrade") != "websocket") {
        return new Response(null, { status: 501 });
    }

    const { socket, response } = Deno.upgradeWebSocket(req);

    socket.onopen = ((socket: WebSocket) => (e) => {
        console.log("a client connected!", info.remoteAddr);
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
    } & EventReadWriter,
) {
    const { this_socket, connections } = deps;

    return async (event: MessageEvent<string>) => {
        console.log("on message", event.data);
        const nostr_ws_msg = JSON.parse(event.data) as ClientRequest_Message;
        const cmd = nostr_ws_msg[0];
        if (cmd == "EVENT") {
            await handle_cmd_event({
                ...deps,
                this_socket,
                connections,
                nostr_ws_msg,
            });
        } else if (cmd == "REQ") {
            return handle_cmd_req(nostr_ws_msg, { ...deps, this_socket });
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
    write_event: func_WriteEvent;
}) {
    const { this_socket, connections, nostr_ws_msg, resolvePolicyByKind, write_event } = args;
    const event = nostr_ws_msg[1];
    const ok = await verifyEvent(event);
    if (!ok) {
        return send(
            this_socket,
            JSON.stringify(respond_ok(event, false, "invalid event")),
        );
    }

    const policy = await resolvePolicyByKind(event.kind);
    { // check if allowed to write
        const author = PublicKey.FromHex(event.pubkey) as PublicKey;
        if (policy.write) {
            if (policy.block.has(author.bech32())) {
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
            if (!policy.allow.has(author.bech32())) {
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

    const _ok = await write_event(event);
    if (_ok) {
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
        console.log(policy);
        if (policy.read === false) {
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
    } & EventReadWriter,
) {
    const { this_socket, resolvePolicyByKind, get_events_by_IDs } = args;
    const sub_id = nostr_ws_msg[1];
    const filters = nostr_ws_msg.slice(2) as NostrFilter[];

    args.connections.get(this_socket)?.set(
        sub_id,
        filters.map((f) => {
            return {
                filter: f,
                eventSent: 0,
            };
        }),
    );

    // query this filter
    for (const filter of filters) {
        const event_candidates = await handle_filter({ ...args, filter });
        for (const event of event_candidates.values()) {
            send(this_socket, JSON.stringify(respond_event(sub_id, event)));
        }
    }

    return send(this_socket, JSON.stringify(respond_eose(sub_id)));
}

async function handle_filter(args: {
    filter: NostrFilter;
    get_events_by_IDs: func_GetEventsByIDs;
    get_events_by_kinds: func_GetEventsByKinds;
    get_events_by_authors: func_GetEventsByAuthors;
    get_events_by_filter: func_GetEventsByFilter;
    resolvePolicyByKind: func_ResolvePolicyByKind;
}) {
    const event_candidates = new Map<string, NostrEvent>();
    const { filter, get_events_by_IDs, resolvePolicyByKind, get_events_by_kinds } = args;
    if (filter.ids) {
        const events = get_events_by_IDs(new Set(filter.ids));
        for await (const event of events) {
            const policy = await resolvePolicyByKind(event.kind);
            if (policy.read == false) {
                continue;
            }
            event_candidates.set(event.id, event);
        }
    }
    if (filter.authors) {
        if (event_candidates.size > 0) {
            console.log("event_candidates", event_candidates);
        } else {
            const events = args.get_events_by_authors(new Set(filter.authors));
            for await (const event of events) {
                console.log(event);
                event_candidates.set(event.id, event);
            }
        }
    }
    if (filter.kinds) {
        if (event_candidates.size > 0) {
            const keys = Array.from(event_candidates.keys());
            for (const key of keys) {
                const event = event_candidates.get(key) as NostrEvent;
                if (filter.kinds.includes(event.kind)) {
                    continue;
                }
                event_candidates.delete(key);
            }
        } else if (!filter.authors) {
            const events = get_events_by_kinds(new Set(filter.kinds));
            for await (const event of events) {
                console.log(event);
                event_candidates.set(event.id, event);
            }
        }
    }
    if (filter.limit) {
        for await (const event of args.get_events_by_filter(filter)) {
            event_candidates.set(event.id, event);
        }
    }
    return event_candidates;
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
        console.log(subscriptions);
        for (const [sub_id, filters] of subscriptions) {
            console.log(sub_id, filters);
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

export function isMatched(event: NostrEvent, subscription: Subscription) {
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
