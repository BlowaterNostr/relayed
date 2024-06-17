import { DB } from "https://deno.land/x/sqlite@v3.8/mod.ts";
import { DefaultPolicy } from "../main.ts";
import { Kind_V2, SpaceMember, verify_event_v2 } from "../nostr.ts/nostr.ts";
import { parseJSON } from "../nostr.ts/_helper.ts";
import { PublicKey } from "../nostr.ts/key.ts";
import { NostrKind } from "../nostr.ts/nostr.ts";

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

export type func_GetSpaceMembers = () => Promise<SpaceMember[] | Error>;
export type func_AddSpaceMember = (event: SpaceMember) => Promise<void | Error>;
export type func_IsSpaceMember = (pubkey: string) => Promise<boolean | Error>;

export const get_space_members = (db?: DB): func_GetSpaceMembers => async () => {
    if (!db) {
        return new Error("get_space_members is not supported");
    }
    const rows = db.query<[string]>(
        "select event from events_v2 where kind = (?)",
        [Kind_V2.SpaceMember],
    );
    const events = [] as SpaceMember[];
    for (const row of rows) {
        const space_member_event = parseJSON<SpaceMember>(row[0]);
        if (space_member_event instanceof Error) {
            return space_member_event;
        }
        events.push(space_member_event);
    }
    return events;
};

export const add_space_member = (db?: DB): func_AddSpaceMember => async (event: SpaceMember) => {
    if (!db) {
        return new Error("add_space_member is not supported");
    }
    if (!(await verify_event_v2(event))) {
        return new Error("Event verification failed");
    }
    if (await is_space_member({ db })(event.member)) {
        return new Error(`${event.member} is already a member of the space.`);
    }
    db.query(
        `INSERT INTO events_v2(id, pubkey, kind, event) VALUES (?, ?, ?, ?)`,
        [event.id, event.pubkey, event.kind, JSON.stringify(event)],
    );
};

export const is_space_member =
    (args: { admin?: PublicKey; db?: DB }): func_IsSpaceMember => async (pubkey: string) => {
        if (args.admin?.hex === pubkey) return true;

        if (!args.db) {
            return new Error("is_space_member is not supported");
        }
        const rows = args.db.query<[string]>(
            "select event from events_v2 where kind = (?) and json_extract(event, '$.member') = (?)",
            [Kind_V2.SpaceMember, pubkey],
        );
        console.log("rows", rows);
        if (rows.length > 0) return true;
        return false;
    };
