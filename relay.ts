import {
    _RelayResponse_Event,
    _RelayResponse_OK,
    ClientRequest_Message,
    NostrEvent,
    NostrFilters,
} from "https://raw.githubusercontent.com/BlowaterNostr/nostr.ts/main/nostr.ts";

export function run(deps: {
    eventStore: EventDatabase;
}) {
    return Deno.serve({
        port: 8080,
    }, (req) => {
        if (req.headers.get("upgrade") != "websocket") {
            return new Response(null, { status: 501 });
        }

        const sockets = new Set<WebSocket>();
        const { socket, response } = Deno.upgradeWebSocket(req);

        socket.onopen = ((socket: WebSocket) => (e) => {
            console.log("a client connected!");
            sockets.add(socket);
        })(socket);

        socket.onclose = ((socket: WebSocket) => (e) => {
            console.log("delete", socket);
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

async function* matchAllEventsWithSubcriptions(
    events: EventDatabase,
    subscriptions: Map<string, NostrFilters>,
) {
    for (const [sub_id, filter] of subscriptions) {
        for await (const event of events.filter(filter)) {
            yield {
                sub_id,
                event,
            };
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

function isMatched(event: NostrEvent, filter: NostrFilters) {
    return filter.kinds?.includes(event.kind) ||
        filter.authors?.includes(event.pubkey) ||
        filter.ids?.includes(event.id) ||
        filter["#p"]?.includes(event.pubkey) ||
        filter["#e"]?.includes(event.id);
    // filter.since
    // filter.until
}

function send(sockets: Set<WebSocket>, data: string) {
    for (const socket of sockets) {
        console.log(sockets.size, "send", data, "to", socket);
        socket.send(data);
    }
}
