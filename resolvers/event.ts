import {
    InMemoryAccountContext,
    NostrEvent,
    NostrFilter,
    NostrKind,
    prepareNormalNostrEvent,
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

export type func_GetEventCount = () => Promise<Map<NostrKind, number>>;

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

export const get_events_by_filter_sqlite =
    (db: DB): func_GetEventsByFilter => async (filter: NostrFilter) => {
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

        sql += ` ORDER BY created_at DESC LIMIT :limit `;
        params.push(filter.limit || 200);

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
