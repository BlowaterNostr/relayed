import {
    _RelayResponse_Event,
    ClientRequest_Message,
    NostrEvent,
    NostrFilters,
} from "https://raw.githubusercontent.com/BlowaterNostr/nostr.ts/main/nostr.ts";

Deno.serve({
    port: 8080,
}, (req) => {
    if (req.headers.get("upgrade") != "websocket") {
        return new Response(null, { status: 501 });
    }

    const { socket, response } = Deno.upgradeWebSocket(req);

    const events = new Map<string, NostrEvent>();

    socket.onopen = (e) => {
        console.log("a client connected!", e);
    };

    socket.addEventListener(
        "message",
        onMessage({
            socket,
            events,
            requested_subscriptions: new Map(),
        }),
    );

    return response;
});

function onMessage(deps: {
    socket: WebSocket;
    events: Map<string, NostrEvent>;
    requested_subscriptions: Map<string, NostrFilters>;
}) {
    const { events, socket, requested_subscriptions } = deps;

    return (event: MessageEvent<string>) => {
        console.log(event.data);
        const nostr_ws_msg = JSON.parse(event.data) as ClientRequest_Message;
        const cmd = nostr_ws_msg[0];
        if (cmd == "EVENT") {
            const id = nostr_ws_msg[1].id;
            if (events.has(id)) {
                return;
            }
            const event = nostr_ws_msg[1];
            events.set(id, event);
            for (
                const matched of matchEventWithSubscriptions(
                    event,
                    requested_subscriptions,
                )
            ) {
                socket.send(JSON.stringify(respond(matched.sub_id, event)));
            }
        } else if (cmd == "REQ") {
            const sub_id = nostr_ws_msg[1];
            const filter = nostr_ws_msg[2];
            requested_subscriptions.set(sub_id, filter);
        } else if (cmd == "CLOSE") {
        } else {
            console.log("not implemented", event.data);
        }
    };
}

function respond(sub_id: string, event: NostrEvent): _RelayResponse_Event {
    return ["EVENT", sub_id, event];
}

function* matchEventWithSubscriptions(
    event: NostrEvent,
    subscriptions: Map<string, NostrFilters>,
) {
    for (const [sub_id, filter] of subscriptions) {
        if (isMatched(event, filter)) {
            yield {
                sub_id,
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
