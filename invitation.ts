import { DB, SqliteError } from "https://deno.land/x/sqlite@v3.8/mod.ts";
import { InviteToSpace } from "./nostr.ts/nostr.ts";

export type func_InviteToSpace = (event: InviteToSpace) => Promise<undefined | Error>;

export const invite_to_space_sqlite = (db: DB): func_InviteToSpace => async (event: InviteToSpace) => {
    try {
        db.query(
            `INSERT INTO events_v2(id, pubkey, kind, event) VALUES (?, ?, ?, ?)`,
            [event.id, event.pubkey, event.kind, JSON.stringify(event)],
        );
    } catch (e) {
        return e as SqliteError;
    }
};
