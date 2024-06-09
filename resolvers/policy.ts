import { DB } from "https://deno.land/x/sqlite@v3.8/mod.ts";
import { DefaultPolicy } from "../main.ts";
import { EventRelayMembers, Kind_V2 } from "../events.ts";
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

export type func_GetRelayMembers = () => Promise<undefined | EventRelayMembers | Error>;
export const get_relay_members = (db?: DB): func_GetRelayMembers => async () => {
    if (!db) {
        return new Error("get_relay_members is not supported");
    }
    const rows = db.query<[string]>(
        "select event from events_v2 where kind = (?)",
        [Kind_V2.RelayMember],
    );

    const events = [] as EventRelayMembers[];
    for (const row of rows) {
        const relay_member_event = parseJSON<EventRelayMembers>(row[0]);
        if (relay_member_event instanceof Error) {
            return relay_member_event;
        }
        events.push(relay_member_event);
    }
    if (events.length == 0) {
        return;
    }

    const event = events.sort((e1, e2) => e1.created_at - e2.created_at)[0];
    console.log(event);
    return event;
};
