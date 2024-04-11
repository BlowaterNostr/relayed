import { NoteID } from "https://raw.githubusercontent.com/BlowaterNostr/nostr.ts/main/nip19.ts";
import {
    InMemoryAccountContext,
    NostrEvent,
    NostrFilter,
    NostrKind,
    prepareNormalNostrEvent,
} from "../_libs.ts";
import { EventReadWriter } from "../main.tsx";
import { assertEquals } from "https://deno.land/std@0.202.0/assert/assert_equals.ts";

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

export type func_GetEventsByIDs = (ids: Set<string>) => AsyncIterable<NostrEvent>;
export type interface_GetEventsByIDs = {
    get_events_by_IDs: func_GetEventsByIDs;
};

export type func_GetEventsByKinds = (kinds: Set<NostrKind>) => AsyncIterable<NostrEvent>;
export type interface_GetEventsByKinds = {
    get_events_by_kinds: func_GetEventsByKinds;
};

export type func_GetEventsByAuthors = (authors: Set<string>) => AsyncIterable<NostrEvent>;
export type interface_GetEventsByAuthors = {
    get_events_by_authors: func_GetEventsByAuthors;
};

export type func_GetEventsByFilter = (filter: NostrFilter) => AsyncIterable<NostrEvent>;

export type func_WriteEvent = (event: NostrEvent) => Promise<boolean>;
export type interface_WriteEvent = {
    write_event: func_WriteEvent;
};

export type func_MarkEventDeleted = (event: NostrEvent | NoteID) => Promise<boolean>;

export class EventStore implements EventReadWriter {
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

    async *get_events_by_IDs(ids: Set<string>) {
        for (const event of this.events.values()) {
            if (ids.has(event.id)) {
                yield event;
            }
        }
    }

    async *get_events_by_kinds(kinds: Set<NostrKind>) {
        for (const event of this.events.values()) {
            if (kinds.has(event.kind)) {
                yield event;
            }
        }
    }

    async *get_events_by_filter(filter: NostrFilter) {
        let i = 0;
        for (const event of this.events.values()) {
            if (isMatched(event, filter)) {
                if (filter.limit && i < filter.limit) {
                    yield event;
                }
                i++;
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

    mark_event_deleted = async (event_or_id: NostrEvent | NoteID) => {
        let id: string;
        if(event_or_id instanceof NoteID) {
            id = event_or_id.hex
        } else {
            id = event_or_id.id
        }
        const result = await this.kv.set(["event", "deleted", id], id);
        if (result.ok) {
            this.events.delete(id);
        }
        return result.ok;
    };
}

function isMatched(event: NostrEvent, filter: NostrFilter) {
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
    return (
        match_kind &&
        match_author &&
        match_id &&
        match_p_tag &&
        match_e_tag
    ) ||
        (kinds.length == 0 && authors.length == 0 && ids.length == 0 &&
            ps.length == 0 && es.length == 0);
}

Deno.test("isMatched", async () => {
    const ctx = InMemoryAccountContext.Generate();
    const event = await prepareNormalNostrEvent(ctx, {
        content: "",
        kind: 1,
    });
    const is = isMatched(event, {
        limit: 1,
    });
    assertEquals(is, true);
});
