import { DB } from "https://deno.land/x/sqlite@v3.8/mod.ts";
import { NostrKind, parseJSON, PrivateKey, PublicKey, sign_event_v2 } from "../_libs.ts";
import { DefaultPolicy } from "../main.tsx";
import { EventRelayMembers, Kind_V2 } from "../events.ts";

export const Policies = (kv: Deno.Kv) =>
    async function () {
        const list = kv.list<Policy>({ prefix: ["policy"] });
        const res = [] as Policy[];
        for await (const entry of list) {
            res.push(entry.value);
        }
        return res;
    };

export type func_ResolvePolicyByKind = (kind: NostrKind) => Promise<Policy>;

export type Policy = {
    kind: NostrKind;
    read: boolean;
    write: boolean;
    allow: Set<string>;
    block: Set<string>;
};

export class PolicyStore {
    policies = new Map<NostrKind, Policy>();

    constructor(
        private readonly args: {
            default_policy: DefaultPolicy;
            kv: Deno.Kv;
            // system_account: PrivateKey;
            initial_policies: Policy[];
            db?: DB;
        },
    ) {
        for (const policy of args.initial_policies) {
            this.policies.set(policy.kind, policy);
        }
    }

    resolvePolicyByKind = async (kind: NostrKind): Promise<Policy> => {
        const policy = this.policies.get(kind);
        if (policy == undefined) {
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
        if (args.read != undefined) {
            policy.read = args.read;
        }
        if (args.write != undefined) {
            policy.write = args.write;
        }
        if (args.allow) {
            policy.allow = args.allow;
        }
        if (args.block) {
            const blocks = new Set<string>();
            for (const str of args.block) {
                const pubkey = PublicKey.FromString(str);
                if (pubkey instanceof Error) {
                    return pubkey;
                }
                blocks.add(pubkey.bech32());
            }
            policy.block = blocks;
        }
        this.policies.set(args.kind, policy);
        await this.args.kv.set(["policy", args.kind], policy);

        {
            // WIP
            // generate new relay member list
            if (this.args.db) {
                if (args.kind == NostrKind.TEXT_NOTE) {
                    // const event = await sign_event_v2(this.args.system_account, {
                    //     pubkey: this.args.system_account.toPublicKey().hex,
                    //     kind: Kind_V2.RelayMember,
                    //     members: Array.from(policy.allow),
                    //     created_at: Date.now(),
                    // });
                    // // warn: could throw
                    // try {
                    //     this.args.db.query(
                    //         `INSERT INTO events_v2 (id, pubkey, kind, event) VALUES (?, ?, ?, ?);`,
                    //         [event.id, event.pubkey, event.kind, JSON.stringify(event)],
                    //     );
                    // } catch (e) {
                    //     console.log(event);
                    //     console.error(e);
                    // }
                }
            } else {
                console.log("Feature Not Supported in this environment: Relay Members");
            }
        }
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
