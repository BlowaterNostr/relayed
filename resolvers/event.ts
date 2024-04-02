import { NostrEvent, NostrKind } from "../_libs.ts";

export type Actor = {
    type: "admin";
} | {
    type: "user";
    npub: string;
};

type Pagination = {
    offset?: number | undefined;
    limit?: number | undefined;
};

export type func_GetEventsByIDs = (ids: string[]) => Promise<NostrEvent[]>;
export const GetEventsByIDs = (kv: Deno.Kv): func_GetEventsByIDs => async (ids: string[]) => {
    const entries = await kv.getMany<NostrEvent[]>(ids.map((id) => ["event", id]));
    return fromEntries(entries);
};

export type func_GetEventsByKinds = (kinds: NostrKind[]) => AsyncIterable<NostrEvent>;
export const GetEventsByKinds = (kv: Deno.Kv): func_GetEventsByKinds =>
    async function* x(kinds: NostrKind[]) {
        for (const kind of kinds) {
            const list = kv.list<NostrEvent>({ prefix: ["event", kind] });
            for await (const entry of list) {
                console.log(entry);
                if (entry.value) {
                    yield entry.value;
                }
            }
        }
    };

function fromEntries<T>(entries: Deno.KvEntryMaybe<T>[]) {
    const events: T[] = [];
    for (const entry of entries) {
        if (entry.value) {
            events.push(entry.value);
        }
    }
    return events;
}

export type func_GetEventsByAuthors = (authors: Set<string>) => AsyncIterable<NostrEvent>;
export type interface_GetEventsByAuthors = {
    get_events_by_authors: func_GetEventsByAuthors;
};

export type func_WriteEvent = (event: NostrEvent) => Promise<boolean>;
export type interface_WriteEvent = {
    write_event: func_WriteEvent;
};

export class EventStore implements interface_GetEventsByAuthors, interface_WriteEvent {
    private constructor(
        private events: Map<string, NostrEvent>,
        private kv: Deno.Kv,
    ) {}

    static async New(kv: Deno.Kv) {
        const entries = kv.list<NostrEvent>({ prefix: ["event"] });
        const events = new Map();
        for await (const entry of entries) {
            const event = entry.value;
            events.set(event.id, event);
        }
        return new EventStore(events, kv);
    }

    async *get_events_by_authors(authors: Set<string>): AsyncIterable<NostrEvent> {
        for (const event of this.events.values()) {
            if (authors.has(event.pubkey)) {
                yield event;
            }
        }
    }

    async write_event(event: NostrEvent) {
        console.log("write_event", event);
        const result = await this.kv.atomic()
            .set(["event", event.id], event)
            .set(["event", event.kind, event.id], event)
            .set(["event", event.pubkey, event.id], event)
            .commit();

        if (result.ok) {
            this.events.set(event.id, event);
        }

        return result.ok;
    }
}
