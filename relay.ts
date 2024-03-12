import {
    _RelayResponse_EOSE,
    _RelayResponse_Event,
    _RelayResponse_OK,
    ClientRequest_Message,
    NostrEvent,
    NostrFilters,
    verifyEvent,
} from "https://raw.githubusercontent.com/BlowaterNostr/nostr.ts/main/nostr.ts";

export function run(deps: {
    eventStore: EventDatabase;
}) {
    const connections = new Map<WebSocket, Map<string, NostrFilters>>();
    Deno.addSignalListener("SIGINT", () => {
        for (const socket of connections.keys()) {
            socket.close();
        }
        Deno.exit();
    });

    return Deno.serve({
        port: 8080,
    }, (req) => {
        if (req.headers.get("upgrade") != "websocket") {
            return new Response(null, { status: 501 });
        }

        const { socket, response } = Deno.upgradeWebSocket(req);

        socket.onopen = ((socket: WebSocket) => (e) => {
            console.log("a client connected!");
            connections.set(socket, new Map());
        })(socket);

        socket.onclose = ((socket: WebSocket) => (e) => {
            connections.delete(socket);
        })(socket);

        socket.onmessage = onMessage({
            this_socket: socket,
            connections,
            event_db: deps.eventStore,
        });

        return response;
    });
}

export interface EventDatabase {
    has(id: string): Promise<boolean> | boolean;
    set(event: NostrEvent): Promise<EventDatabase> | EventDatabase;
    filter(filter: NostrFilters): AsyncIterable<NostrEvent>;
    all(): AsyncIterable<NostrEvent>;
}

function onMessage(deps: {
    this_socket: WebSocket;
    connections: Map<WebSocket, Map<string, NostrFilters>>;
    event_db: EventDatabase;
}) {
    const { event_db, this_socket, connections } = deps;

    return async (event: MessageEvent<string>) => {
        console.log(event.data);
        const nostr_ws_msg = JSON.parse(event.data) as ClientRequest_Message;
        const cmd = nostr_ws_msg[0];
        if (cmd == "EVENT") {
            const id = nostr_ws_msg[1].id;
            if (await event_db.has(id)) {
                return;
            }
            const event = nostr_ws_msg[1];
            const ok = await verifyEvent(event);
            if (!ok) {
                return send(
                    this_socket,
                    JSON.stringify(respond_ok(event, false, "invalid event")),
                );
            }
            console.log(nostr_ws_msg);
            await event_db.set(event);
            send(this_socket, JSON.stringify(respond_ok(event, true, "")));
            for (
                const matched of matchEventWithSubscriptions(
                    event,
                    connections,
                )
            ) {
                send(
                    matched.socket,
                    JSON.stringify(respond_event(matched.sub_id, event)),
                );
            }
        } else if (cmd == "REQ") {
            const sub_id = nostr_ws_msg[1];
            const filter = nostr_ws_msg[2];
            connections.get(this_socket)?.set(sub_id, filter);
            for await (
                const matched of matchAllEventsWithSubcriptions(
                    event_db,
                    connections,
                )
            ) {
                const res = JSON.stringify(
                    respond_event(matched.sub_id, matched.event),
                );
                send(matched.socket, res);
            }
            send(this_socket, JSON.stringify(respond_eose(sub_id)));
        } else if (cmd == "CLOSE") {
        } else {
            console.log("not implemented", event.data);
        }
    };
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

async function* matchAllEventsWithSubcriptions(
    events: EventDatabase,
    connections: Map<WebSocket, Map<string, NostrFilters>>,
) {
    const all_events = [];
    for await (const event of events.all()) {
        all_events.push(event);
    }
    for (const [socket, subscriptions] of connections) {
        for (const [sub_id, filter] of subscriptions) {
            let i = 0;
            for await (const event of all_events) {
                if (isMatched(event, filter)) {
                    yield {
                        socket,
                        sub_id,
                        event,
                    };
                    i++;
                    if (i == filter.limit) {
                        break;
                    }
                }
            }
        }
    }
}

function* matchEventWithSubscriptions(
    event: NostrEvent,
    connections: Map<WebSocket, Map<string, NostrFilters>>,
) {
    for (const [socket, subscriptions] of connections) {
        for (const [sub_id, filter] of subscriptions) {
            if (isMatched(event, filter)) {
                yield {
                    socket,
                    sub_id,
                    event,
                };
            }
        }
    }
}

export function isMatched(event: NostrEvent, filter: NostrFilters) {
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

    return res;
}

function send(socket: WebSocket, data: string) {
    if (socket.readyState == socket.OPEN) {
        socket.send(data);
    }
}
