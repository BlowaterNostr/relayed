import { NostrEvent, NostrKind } from "../_libs.ts";
import { DefaultPolicy } from "../main.tsx";

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
        private default_policy: DefaultPolicy,
        private kv: Deno.Kv,
        private initial_policies: Policy[],
    ) {
        for (const policy of initial_policies) {
            this.policies.set(policy.kind, policy);
        }
    }

    resolvePolicyByKind = async (kind: NostrKind): Promise<Policy> => {
        const policy = this.policies.get(kind);
        if (policy == undefined) {
            const default_policy = this.default_policy;
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
        } | Policy,
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
            policy.block = args.block;
        }
        this.policies.set(args.kind, policy);
        await this.kv.set(["policy", args.kind], policy);
        return policy;
    };
}
