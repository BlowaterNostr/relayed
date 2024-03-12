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
    const sockets = new Set<WebSocket>();
    return Deno.serve({
        port: 8080,
    }, (req) => {
        if (req.headers.get("upgrade") != "websocket") {
            return new Response(null, { status: 501 });
        }

        const { socket, response } = Deno.upgradeWebSocket(req);

        socket.onopen = ((socket: WebSocket) => (e) => {
            console.log("a client connected!");
            sockets.add(socket);
        })(socket);

        socket.onclose = ((socket: WebSocket) => (e) => {
            sockets.delete(socket);
        })(socket);

        socket.onmessage = onMessage({
            sockets,
            event_db: deps.eventStore,
            requested_subscriptions: new Map(),
        });

        return response;
    });
}

export interface EventDatabase {
    has(id: string): Promise<boolean> | boolean;
    set(event: NostrEvent): Promise<EventDatabase> | EventDatabase;
    filter(filter: NostrFilters): AsyncIterable<NostrEvent>;
}

function onMessage(deps: {
    sockets: Set<WebSocket>;
    event_db: EventDatabase;
    requested_subscriptions: Map<string, NostrFilters>;
}) {
    const { event_db, sockets, requested_subscriptions } = deps;

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
                    sockets,
                    JSON.stringify(respond_ok(event, false, "invalid event")),
                );
            }
            console.log(nostr_ws_msg);
            await event_db.set(event);
            send(sockets, JSON.stringify(respond_ok(event, true, "")));
            for (
                const matched of matchEventWithSubscriptions(
                    event,
                    requested_subscriptions,
                )
            ) {
                send(
                    sockets,
                    JSON.stringify(respond_event(matched.sub_id, event)),
                );
            }
        } else if (cmd == "REQ") {
            const sub_id = nostr_ws_msg[1];
            const filter = nostr_ws_msg[2];
            requested_subscriptions.set(sub_id, filter);
            for await (
                const matched of matchAllEventsWithSubcriptions(
                    event_db,
                    requested_subscriptions,
                )
            ) {
                const res = JSON.stringify(
                    respond_event(matched.sub_id, matched.event),
                );
                send(sockets, res);
            }
            send(sockets, JSON.stringify(respond_eose(sub_id)));
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
    subscriptions: Map<string, NostrFilters>,
) {
    for (const [sub_id, filter] of subscriptions) {
        let i = 0;
        for await (const event of events.filter(filter)) {
            yield {
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

function* matchEventWithSubscriptions(
    event: NostrEvent,
    subscriptions: Map<string, NostrFilters>,
) {
    for (const [sub_id, filter] of subscriptions) {
        if (isMatched(event, filter)) {
            yield {
                sub_id,
                event,
            };
        }
    }
}

export function isMatched(event: NostrEvent, filter: NostrFilters) {
    const kinds = filter.kinds || [];
    const authors = filter.authors || [];
    const ids = filter.ids || [];
    const ps = filter["#p"] || [];
    const es = filter["#e"] || [];
    return kinds.includes(event.kind) ||
        authors.includes(event.pubkey) ||
        ids.includes(event.id) ||
        ps.includes(event.pubkey) ||
        es.includes(event.id) ||
        (kinds.length == 0 && authors.length == 0 && ids.length == 0 &&
            ps.length == 0 && es.length == 0);
    // filter.since
    // filter.until
}

function send(sockets: Set<WebSocket>, data: string) {
    for (const socket of sockets) {
        console.log(sockets.size, "send", data);
        if (socket.readyState == socket.OPEN) {
            socket.send(data);
        }
    }
}
