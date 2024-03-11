import {
    NostrEvent,
    NostrFilters,
} from "https://raw.githubusercontent.com/BlowaterNostr/nostr.ts/main/nostr.ts";
import { EventDatabase, run } from "../relay.ts";
import { isMatched } from "../relay.ts";

const kv = await Deno.openKv();

const eventStore: EventDatabase = {
    has: async (id: string) => {
        const entry = await kv.get<NostrEvent>([id]);
        return entry.value != null;
    },
    set: async (event: NostrEvent) => {
        const result = await kv.set([event.id], event);
        if (!result.ok) {
            console.error(`failed to set`, event);
        }
        return eventStore;
    },
    filter: async function* (filter: NostrFilters) {
        for await (const entry of kv.list<NostrEvent>({ prefix: [] })) {
            const event = entry.value;
            if (isMatched(event, filter)) {
                yield event;
            }
        }
    },
};

run({ eventStore });
