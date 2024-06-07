import { DB, SqliteError } from "https://deno.land/x/sqlite@v3.8/mod.ts";
import { AcceptInvitation, InviteToSpace } from "./nostr.ts/nostr.ts";

export type func_InviteToSpace = (event: InviteToSpace) => Promise<undefined | SqliteError>;
export type func_GetInviteToSpaceByID = (
    id: string,
) => Promise<InviteToSpace | SqliteError | NotFoundEventError>;
export type func_AcceptInvitation = (event: AcceptInvitation) => Promise<undefined | SqliteError>;
export type func_CountInviteToSpaceEachInvite = (invite_event_id: string) => Promise<number | SqliteError>;

export class NotFoundEventError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "NotFoundEventError";
    }
}

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

export const get_invite_to_space_by_id_sqlite = (db: DB): func_GetInviteToSpaceByID => async (id: string) => {
    try {
        const rows = db.query<[string]>(
            `SELECT event FROM events_v2 WHERE id = ? AND kind = "InviteToSpace"`,
            [id],
        );
        if (rows.length == 0) {
            return new NotFoundEventError(`InviteToSpace event ${id} does not exist`);
        }
        const entry = rows[0];
        return JSON.parse(entry[0]) as InviteToSpace;
    } catch (e) {
        return e as SqliteError;
    }
};

export const accept_invitation_sqlite =
    (db: DB): func_AcceptInvitation => async (event: AcceptInvitation) => {
        try {
            db.query(
                `INSERT INTO events_v2(id, pubkey, kind, event) VALUES (?, ?, ?, ?)`,
                [event.id, event.pubkey, event.kind, JSON.stringify(event)],
            );
        } catch (e) {
            return e as SqliteError;
        }
    };

export const count_invite_to_space_each_invite_sqlite =
    (db: DB): func_CountInviteToSpaceEachInvite => async (invite_event_id: string) => {
        try {
            const rows = db.query<[number]>(
                `SELECT count(*) FROM events_v2 WHERE kind = "AcceptInvitation" AND event.invite_event_id = ?`,
                [invite_event_id],
            );
            return rows[0][0];
        } catch (e) {
            return e as SqliteError;
        }
    };
