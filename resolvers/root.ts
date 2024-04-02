import { PolicyStore } from "./policy.ts";
import { Policies } from "./policy.ts";

export const Mutation = (args: {
    policyStore: PolicyStore;
    kv: Deno.Kv;
}) => {
    const { policyStore, kv } = args;
    return {
        add_block: async (args: { kind: number; pubkey: string }) => {
            const policy = await policyStore.resolvePolicyByKind(args.kind);
            policy.block.add(args.pubkey);
            await kv.set(["policy", args.kind], policy);
            return policy;
        },
        remove_block: async (args: { kind: number; pubkey: string }) => {
            const policy = await policyStore.resolvePolicyByKind(args.kind);
            policy.block.delete(args.pubkey);
            await kv.set(["policy", args.kind], policy);
            return policy;
        },
        add_allow: async (args: { kind: number; pubkey: string }) => {
            const policy = await policyStore.resolvePolicyByKind(args.kind);
            policy.allow.add(args.pubkey);
            await kv.set(["policy", args.kind], policy);
            return policy;
        },
        remove_allow: async (args: { kind: number; pubkey: string }) => {
            const policy = await policyStore.resolvePolicyByKind(args.kind);
            policy.allow.delete(args.pubkey);
            await kv.set(["policy", args.kind], policy);
            return policy;
        },
        set_policy: policyStore.set_policy,
    };
};

export function RootResolver(args: {
    policyStore: PolicyStore;
    kv: Deno.Kv;
}) {
    return {
        policies: Policies(args.kv),
        ...Mutation(args),
    };
}
