import { DB } from "https://deno.land/x/sqlite@v3.9.1/mod.ts";
import { PublicKey } from "@blowater/nostr-sdk";

export type func_DeleteEvent = (event_id: string) => Promise<boolean>;
export type func_DeleteEventsFromPubkey = (pubkey: string | PublicKey) => Promise<string[]>;
export type func_GetDeletedEventIDs = () => Promise<string[]>;

export const delete_event_sqlite = (db: DB): func_DeleteEvent => async (event_id: string) => {
    db.query(
        `
    DELETE FROM events_v1
    WHERE id = :id;
    `,
        { id: event_id },
    );
    db.query(
        `
    DELETE FROM replaceable_events_v1
    WHERE id = :id;
    `,
        { id: event_id },
    );
    return true;
};
