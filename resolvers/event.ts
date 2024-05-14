import { NoteID } from "https://raw.githubusercontent.com/BlowaterNostr/nostr.ts/main/nip19.ts";
import {
    InMemoryAccountContext,
    NostrEvent,
    NostrFilter,
    NostrKind,
    prepareNormalNostrEvent,
    PublicKey,
} from "../_libs.ts";
import { assertEquals } from "https://deno.land/std@0.202.0/assert/assert_equals.ts";
import { DB, SqliteError } from "https://deno.land/x/sqlite@v3.8/mod.ts";

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

export type func_GetEventsByFilter = (filter: NostrFilter) => Promise<NostrEvent[]>;

export type func_WriteRegularEvent = (event: NostrEvent) => Promise<boolean | Error>;

export type func_WriteReplaceableEvent = (event: NostrEvent) => Promise<boolean | Error>;
export type func_GetReplaceableEvents = (args: {
    kinds: NostrKind[];
    authors: string[];
}) => AsyncIterable<NostrEvent>;

export type func_DeleteEvent = (event: NostrEvent | NoteID | string) => Promise<boolean>;
export type func_DeleteEventsFromPubkey = (pubkey: string | PublicKey) => Promise<string[]>;

export type func_GetEventCount = () => Promise<Map<NostrKind, number>>;

export type func_GetDeletedEventIDs = () => Promise<string[]>;
interface DeletedEventIDs {
    get_deleted_event_ids: func_GetDeletedEventIDs;
}

export class Event_V1_Store implements DeletedEventIDs {
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

    delete_event = async (event_or_id: NostrEvent | NoteID | string) => {
        let id: string;
        if (typeof event_or_id == "string") {
            id = event_or_id;
        } else if (event_or_id instanceof NoteID) {
            id = event_or_id.hex;
        } else {
            id = event_or_id.id;
        }

        // delete the event
        const events = this.get_events_by_IDs(new Set([id]));
        for await (const event of events) {
            const keys = regular_event_keys(event);
            await this.kv.delete(keys[0]);
            await this.kv.delete(keys[1]);
            await this.kv.delete(keys[2]);
        }

        // record deleted event id
        const result = await this.kv.set(deletion_key(id), id);
        if (result.ok) {
            this.events.delete(id);
        }

        return result.ok;
    };

    delete_events_from_pubkey = async (pubkey: PublicKey | string) => {
        if (pubkey instanceof PublicKey) {
            pubkey = pubkey.hex;
        }
        const events = this.get_events_by_authors(new Set([pubkey]));

        const deleted = [] as string[];
        for await (const event of events) {
            const ok = await this.delete_event(event);
            if (!ok) {
                console.error(`failed to delete`, event);
                continue;
            }
            deleted.push(event.id);
        }
        return deleted;
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

export const event_schema_sqlite = `
CREATE TABLE IF NOT exists events_v1 (
    id         TEXT    PRIMARY KEY,
    pubkey     TEXT    NOT NULL,
    kind       INTEGER NOT NULL,
    content    TEXT    NOT NULL,
    created_at INTEGER NOT NULL,
    event      JSON    NOT NULL
);

CREATE TABLE IF NOT EXISTS replaceable_events_v1 (
    id         TEXT    PRIMARY KEY,
    kind       INTEGER NOT NULL,
    pubkey     TEXT    NOT NULL,
    content    TEXT    NOT NULL,
    created_at INTEGER NOT NULL,
    event      JSON    NOT NULL,
    UNIQUE (kind, pubkey)
);

CREATE TABLE IF NOT exists events_v2 (
    id         TEXT    PRIMARY KEY,
    pubkey     TEXT    NOT NULL,
    kind       TEXT    NOT NULL,
    event      JSON    NOT NULL
);
`;

export const get_events_by_filter = (db: DB): func_GetEventsByFilter => async (filter: NostrFilter) => {
    let sql = `SELECT json(event) as event FROM events_v1 WHERE true`;
    const params = [] as any[];

    if (filter.ids && filter.ids.length > 0) {
        sql += ` AND id IN (${filter.ids.map(() => "?").join(",")})`;
        params.push(...filter.ids);
    }

    if (filter.authors && filter.authors.length > 0) {
        sql += ` AND pubkey IN (${filter.authors.map(() => "?").join(",")})`;
        params.push(...filter.authors);
    }

    if (filter.kinds && filter.kinds.length > 0) {
        sql += ` AND kind IN (${filter.kinds.map(() => "?").join(",")})`;
        params.push(...filter.kinds);
    }

    sql += ` LIMIT :limit`;
    params.push(filter.limit || 100);

    console.log(sql, "\n", params, "\n", filter);
    const results = db.query<[string]>(sql, params);
    return results.map((r) => JSON.parse(r[0]) as NostrEvent);
};

export const write_regular_event_sqlite = (db: DB): func_WriteRegularEvent => async (event: NostrEvent) => {
    try {
        const result = db.query(
            `INSERT INTO events_v1 values
    (:id, :pubkey, :kind, :content, :created_at, :event)`,
            {
                id: event.id,
                pubkey: event.pubkey,
                kind: event.kind,
                content: event.content,
                created_at: event.created_at,
                event: JSON.stringify(event),
            },
        );
        console.log(result);
        return true;
    } catch (e) {
        return e as SqliteError;
    }
};

export const write_replaceable_event_sqlite =
    (db: DB): func_WriteReplaceableEvent => async (event: NostrEvent) => {
        try {
            const result = db.query(
                `INSERT INTO replaceable_events_v1 values
                (:id, :pubkey, :kind, :content, :created_at, :event)
                ON CONFLICT(kind, pubkey) DO UPDATE SET
                    id = excluded.id,
                    content = excluded.content,
                    created_at = excluded.created_at,
                    event = excluded.event
                WHERE excluded.created_at > replaceable_events_v1.created_at;
                `,
                {
                    id: event.id,
                    pubkey: event.pubkey,
                    kind: event.kind,
                    content: event.content,
                    created_at: event.created_at,
                    event: JSON.stringify(event),
                },
            );
            console.log(result);
            return true;
        } catch (e) {
            return e as SqliteError;
        }
    };

export const get_event_count_sqlite = (db: DB): func_GetEventCount => async () => {
    const rows = db.query<[number, number]>(`SELECT kind, count(*) as count FROM events_v1 group by kind`);
    return new Map(rows);
};

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
