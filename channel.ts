import { v2 } from "@blowater/nostr-sdk";
import { DB, SqliteError } from "https://deno.land/x/sqlite@v3.9.1/mod.ts";

export type func_GetChannelByName = (
    name: string,
) => Promise<{ create: v2.ChannelCreation; edit?: v2.ChannelEdition } | undefined>;

export type func_GetChannelByID = (
    id: string,
) => Promise<{ create: v2.ChannelCreation; edit?: v2.ChannelEdition } | undefined>;

export type func_CreateChannel = (event: v2.ChannelCreation) => Promise<boolean>;
export type func_EditChannel = (event: v2.ChannelEdition) => Promise<void | Error>;

export function channel_creation_key(id: string) {
    return ["event_v2", v2.Kind_V2.ChannelCreation, id];
}
export function channel_edition_key(id: string) {
    return ["event_v2", v2.Kind_V2.ChannelEdition, id];
}

export const create_channel_kv = (kv: Deno.Kv): func_CreateChannel => async (event: v2.ChannelCreation) => {
    const result = await kv.set(channel_creation_key(event.id), event);
    return result.ok;
};

export const create_channel_sqlite = (db: DB): func_CreateChannel => async (event: v2.ChannelCreation) => {
    const rows = db.query(
        `INSERT INTO channels (channel_id, name, creation_event) VALUES (?, ?, ?);`,
        [event.id, event.name, JSON.stringify(event)],
    );
    return true;
};

export const edit_channel_kv = (kv: Deno.Kv): func_EditChannel => async (event: v2.ChannelEdition) => {
    const chan = await kv.get<v2.ChannelCreation>(channel_creation_key(event.channel_id));
    if (chan.value == null) {
        return new Error(`channel ${event.channel_id} does not exist`);
    }
    if (chan.value.pubkey != event.pubkey) {
        return new Error(`user ${event.pubkey} are not the creator of this channel`);
    }

    const result = await kv.set(channel_edition_key(event.channel_id), event);
    if (result.ok) {
        return;
    } else {
        return new Error("failed to write event");
    }
};

export const edit_channel_sqlite = (db: DB): func_EditChannel => async (event: v2.ChannelEdition) => {
    const channel = await get_channel_by_id_sqlite(db)(event.channel_id);
    if (channel == undefined) {
        return new Error(`channel ${event.channel_id} does not exist`);
    }
    if (channel.create.pubkey != event.pubkey) {
        return new Error(`user ${event.pubkey} are not the creator of this channel`);
    }

    try {
        const rows = db.query(
            `UPDATE channels SET edition_event = (?) WHERE channel_id = (?);`,
            [JSON.stringify(event), event.channel_id],
        );
        return;
    } catch (e) {
        console.error(e);
        return e as SqliteError;
    }
};

export const get_channel_by_id_kv = (kv: Deno.Kv): func_GetChannelByID => async (id: string) => {
    const chan = await kv.get<v2.ChannelCreation>(channel_creation_key(id));
    if (chan.value == null) {
        return undefined;
    }
    const chan_edit = await kv.get<v2.ChannelEdition>(channel_edition_key(id));
    return {
        create: chan.value,
        edit: chan_edit.value || undefined,
    };
};

export const get_channel_by_id_sqlite = (db: DB): func_GetChannelByID => async (id: string) => {
    const rows = db.query<[string, string | null]>(
        `SELECT creation_event, edition_event FROM channels WHERE channel_id = (?);`,
        [id],
    );
    const entry = rows[0];
    if (entry == undefined) {
        return undefined;
    }
    return {
        create: JSON.parse(entry[0]),
        edit: entry[1] ? JSON.parse(entry[1]) : undefined,
    };
};

// export const get_channel_by_name = (db: DB): func_GetChannelByName => (name: string) => {

//     return;
// };

export const sqlite_schema = `
-- Create the table
CREATE TABLE IF NOT exists channels (
    channel_id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    creation_event JSON NOT NULL,
    edition_event JSON
);

-- Create indexes
-- Index for the primary key 'id' is automatically created as it is the primary key
-- Create index for 'name'
CREATE INDEX IF NOT exists idx_name ON channels (name);
`;
