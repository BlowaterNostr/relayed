import { NostrEvent, NostrFilters } from "https://raw.githubusercontent.com/BlowaterNostr/nostr.ts/main/nostr.ts";
import { EventDatabase, run } from "../relay.ts";

const kv = await Deno.openKv();

const eventStore: EventDatabase = {
    has: async (id: string) => {
        const entry = await kv.get<NostrEvent>([id])
        return entry.value != null
    },
    set: async (id: string, event: NostrEvent) => {
        const result = await kv.set([event.kind, id], event)
        if(!result.ok) {
            console.error(`failed to set`, event)
        }
        return eventStore;
    },
    filter: async function* (filter: NostrFilters) {
        for(const kind of filter.kinds || []) {
            for await (const event of kv.list<NostrEvent>({prefix: [kind]})) {
                yield event.value
            }
        }

    }
}

run({ eventStore });
