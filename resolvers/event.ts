import { NoteID } from "https://raw.githubusercontent.com/BlowaterNostr/nostr.ts/main/nip19.ts";
import {
    InMemoryAccountContext,
    NostrEvent,
    NostrFilter,
    NostrKind,
    prepareNormalNostrEvent,
    PublicKey,
} from "../_libs.ts";
import { EventReadWriter } from "../main.tsx";
import { assertEquals } from "https://deno.land/std@0.202.0/assert/assert_equals.ts";
import { DB } from "https://deno.land/x/sqlite@v3.8/mod.ts";

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

export type func_WriteRegularEvent = (event: NostrEvent) => Promise<boolean | Error>;

export type func_WriteReplaceableEvent = (event: NostrEvent) => Promise<boolean | Error>;
export type func_GetReplaceableEvents = (args: {
    kinds: NostrKind[];
    authors: string[];
}) => AsyncIterable<NostrEvent>;

export type func_DeleteEvent = (event: NostrEvent | NoteID | string) => Promise<boolean>;
export type func_GetEventCount = () => Promise<Map<NostrKind, number>>;

export type func_GetDeletedEventIDs = () => Promise<string[]>;
interface DeletedEventIDs {
    get_deleted_event_ids: func_GetDeletedEventIDs;
}

export class Event_V1_Store implements EventReadWriter, DeletedEventIDs {
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
        return new Event_V1_Store(events, kv);
    }

    get_event_count: func_GetEventCount = async () => {
        const count_per_kind = new Map<NostrKind, number>();
        for (const event of this.events.values()) {
            const per_kind = count_per_kind.get(event.kind);
            if (per_kind) {
                count_per_kind.set(event.kind, per_kind + 1);
            } else {
                count_per_kind.set(event.kind, 1);
            }
        }
        return count_per_kind;
    };

    async *get_events_by_authors(authors: Set<string>): AsyncIterable<NostrEvent> {
        const hex_keys = new Set();
        for (const author of authors) {
            const key = PublicKey.FromString(author);
            if (key instanceof Error) {
                continue;
            }
            hex_keys.add(key.hex);
        }
        for (const event of this.events.values()) {
            if (hex_keys.has(event.pubkey)) {
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

    get_event = async (id: string) => {
        const entry = await this.kv.get<NostrEvent>(["event", id]);
        return entry.value;
    };

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

    async *get_replaceable_events(args: {
        kinds: NostrKind[];
        authors: string[];
    }) {
        for (const kind of args.kinds) {
            for (const author of args.authors) {
                const key = ["event", kind, author];
                const entry = await this.kv.get<NostrEvent>(key);
                if (entry.value) {
                    yield entry.value;
                }
            }
        }
    }

    write_regular_event = async (event: NostrEvent) => {
        if (isReplaceableEvent(event.kind)) {
            return false;
        }
        console.log("write_event", event);
        const keys = regular_event_keys(event);
        const op = this.kv.atomic()
            .set(keys[0], event)
            .set(keys[1], event)
            .set(keys[2], event);

        let result: Deno.KvCommitResult | Deno.KvCommitError;
        try {
            result = await op.commit();
        } catch (e) {
            return e as Error;
        }

        return result.ok;
    };

    write_replaceable_event = async (event: NostrEvent) => {
        const kind = event.kind;
        if (!isReplaceableEvent(kind)) {
            return false;
        }
        console.log("write_replaceable_event", event);
        const op = this.kv.atomic()
            .set(["event", event.kind, event.pubkey], event)
            .set(["event", event.pubkey, event.kind], event);

        let result: Deno.KvCommitResult | Deno.KvCommitError;
        try {
            result = await op.commit();
        } catch (e) {
            return e as Error;
        }

        return result.ok;
    };

    delete_event = async (event_or_id: NostrEvent | NoteID | string) => {
        let id: string;
        if (typeof event_or_id == "string") {
            id = event_or_id;
        } else if (event_or_id instanceof NoteID) {
            id = event_or_id.hex;
        } else {
            id = event_or_id.id;
        }
        const result = await this.kv.set(deletion_key(id), id);
        if (result.ok) {
            this.events.delete(id);
        }
        return result.ok;
    };

    get_deleted_event_ids = async () => {
        const list = this.kv.list<string>({
            prefix: deletion_key_prefix(),
        });
        const ids = [] as string[];
        for await (const entry of list) {
            ids.push(entry.value);
        }
        return ids;
    };
}

function regular_event_keys(event: NostrEvent) {
    return [
        ["event", event.id],
        ["event", event.kind, event.id],
        ["event", event.pubkey, event.id],
    ];
}

function deletion_key_prefix() {
    return ["event", "deleted"];
}

function deletion_key(id: string) {
    return [...deletion_key_prefix(), id];
}

export function isReplaceableEvent(kind: NostrKind) {
    return kind == NostrKind.META_DATA || kind == NostrKind.CONTACTS || (10000 <= kind && kind < 20000);
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

export const event_v1_schema_sqlite = `
CREATE TABLE IF NOT exists events_v1 (
    id         TEXT    PRIMARY KEY,
    pubkey     TEXT    NOT NULL,
    kind       INTEGER NOT NULL,
    content    TEXT    NOT NULL,
    created_at INTEGER NOT NULL,
    event      JSON    NOT NULL
);
`;

// export const get_events_with_filter = (db: DB) => (filter: NostrFilter) => {
//     db.query<[string] >(`
//     SELECT event FROM events_v1
//     WHERE id IN (:ids)
//         AND pubkey IN (:authors)
//         AND kind IN (:kinds);
//     `, filter)

// }

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
