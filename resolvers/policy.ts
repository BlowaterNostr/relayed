import { DB } from "https://deno.land/x/sqlite@v3.9.1/mod.ts";
import { DefaultPolicy } from "../main.ts";

import { NostrKind, parseJSON, PublicKey, v2 } from "@blowater/nostr-sdk";

export const Policies = (kv: Deno.Kv) =>
    async function () {
        const list = kv.list<Policy>({ prefix: ["policy"] });
        const res = [] as Policy[];
        for await (const entry of list) {
            res.push(entry.value);
        }
        return res;
    };

export type func_ResolvePolicyByKind = (kind: NostrKind) => Promise<Policy | Error>;

export type Policy = {
    kind: NostrKind;
    read: boolean;
    write: boolean;
    allow: Set<string>;
    block: Set<string>;
};

export class PolicyStore {
    constructor(
        private readonly args: {
            default_policy: DefaultPolicy;
            initial_policies: Policy[];
            kv: Deno.Kv;
        },
    ) {}

    resolvePolicyByKind: func_ResolvePolicyByKind = async (kind: NostrKind) => {
        let entry: Deno.KvEntryMaybe<Policy>;
        try {
            entry = await this.args.kv.get<Policy>(["policy", kind]);
        } catch (e) {
            return e as Error;
        }
        const policy = entry.value;
        if (policy == null) {
            const default_policy = this.args.default_policy;
            let allow_this_kind: boolean;
            if (default_policy.allowed_kinds == "all") {
                allow_this_kind = true;
            } else if (default_policy.allowed_kinds == "none") {
                allow_this_kind = false;
            } else if (default_policy.allowed_kinds.includes(kind)) {
                allow_this_kind = true;
            } else {
                allow_this_kind = false;
            }
            return {
                kind: kind,
                read: allow_this_kind,
                write: allow_this_kind,
                allow: new Set(),
                block: new Set(),
            };
        }
        return policy;
    };

    set_policy = async (
        args: {
            kind: NostrKind;
            read?: boolean;
            write?: boolean;
            allow?: Set<string>;
            block?: Set<string>;
        },
    ) => {
        const policy = await this.resolvePolicyByKind(args.kind);
        if (policy instanceof Error) {
            return policy;
        }
        if (args.read != undefined) {
            policy.read = args.read;
        }
        if (args.write != undefined) {
            policy.write = args.write;
        }
        if (args.allow) {
            const allow = new Set<string>();
            for (const str of args.allow) {
                const pubkey = PublicKey.FromString(str);
                if (pubkey instanceof Error) {
                    return pubkey;
                }
                allow.add(pubkey.hex);
            }
            policy.allow = allow;
        }
        if (args.block) {
            const blocks = new Set<string>();
            for (const str of args.block) {
                const pubkey = PublicKey.FromString(str);
                if (pubkey instanceof Error) {
                    return pubkey;
                }
                blocks.add(pubkey.hex);
            }
            policy.block = blocks;
        }
        await this.args.kv.set(["policy", args.kind], policy);
        return policy;
    };
}

export type func_GetSpaceMembers = () => Promise<v2.SpaceMember[] | Error>;
export type func_AddSpaceMember = (event: v2.SpaceMember) => Promise<void | Error>;
export type func_IsSpaceMember = (pubkey: string) => Promise<boolean | Error>;

export const get_space_members = (db: DB): func_GetSpaceMembers => async () => {
    const rows = db.query<[string]>(
        "select event from events_v2 where kind = (?)",
        [v2.Kind_V2.SpaceMember],
    );
    const events = [] as v2.SpaceMember[];
    for (const row of rows) {
        const space_member_event = parseJSON<v2.SpaceMember>(row[0]);
        if (space_member_event instanceof Error) {
            return space_member_event;
        }
        events.push(space_member_event);
    }
    return events;
};

export const add_space_member =
    (args: { admin: PublicKey; db: DB }): func_AddSpaceMember => async (event: v2.SpaceMember) => {
        if (event.pubkey != args.admin.hex) {
            return new Error("Only administrators can add members to the space.");
        }
        if (await is_space_member({ ...args })(event.member)) {
            return new Error(`${event.member} is already a member of the space.`);
        }
        try {
            args.db.query(
                `INSERT INTO events_v2(id, pubkey, kind, event) VALUES (?, ?, ?, ?)`,
                [event.id, event.pubkey, event.kind, JSON.stringify(event)],
            );
        } catch (e) {
            return e as Error;
        }
    };

export const is_space_member =
    (args: { admin: PublicKey; db: DB }): func_IsSpaceMember => async (pubkey: string) => {
        if (args.admin.hex === pubkey) return true;
        try {
            const rows = args.db.query<[string]>(
                "select event from events_v2 where kind = (?) and json_extract(event, '$.member') = (?)",
                [v2.Kind_V2.SpaceMember, pubkey],
            );
            return rows.length > 0;
        } catch (e) {
            return e as Error;
        }
    };
