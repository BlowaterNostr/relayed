import { NostrEvent, NostrKind } from "../_libs.ts";
import { DefaultPolicy } from "../main.tsx";

export const Policies = (kv: Deno.Kv) =>
    async function () {
        const list = kv.list<NostrEvent>({ prefix: ["policy"] });
        const res = [] as NostrEvent[];
        for await (const entry of list) {
            res.push(entry.value);
        }
        return res;
    };

export const get_policies = (kv: Deno.Kv) => async (kinds: NostrKind[]) => {
    const entries = await kv.getMany<Policy[]>(kinds.map((kind) => ["policy", kind]));
    return entries.map((entry) => entry.value);
};

export type func_ResolvePolicyByKind = (kind: NostrKind) => Promise<Policy>;
export const PolicyResolver = (default_policy: DefaultPolicy, kv: Deno.Kv): func_ResolvePolicyByKind =>
    async function (kind: NostrKind): Promise<Policy> {
        const entry = await kv.get<Policy>(["policy", kind]);
        if (entry.value == null) {
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
        const policy = entry.value;

        const allow = new Set<string>();
        for (const item of policy.allow) {
            if (typeof item == "string") {
                allow.add(item);
            }
        }
        policy.allow = allow;

        const block = new Set<string>();
        for (const item of policy.block) {
            if (typeof item == "string") {
                block.add(item);
            }
        }
        policy.block = block;
        policy.kind = kind;
        if (policy.read == null) {
            policy.read = true;
        }
        if (policy.write == null) {
            policy.write = true;
        }
        return policy;
    };

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
    ) {}

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
        },
    ) => {
        const policy = await this.resolvePolicyByKind(args.kind);
        if (args.read != undefined) {
            policy.read = args.read;
        }
        if (args.write != undefined) {
            policy.write = args.write;
        }
        this.policies.set(args.kind, policy);
        await this.kv.set(["policy", args.kind], policy);
        return policy;
    };
}
