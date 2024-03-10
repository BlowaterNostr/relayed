import { NostrKind } from "../_libs.ts";
import { Policies } from "./policy.ts";
import { func_ResolvePolicyByKind } from "./policy.ts";

export const Mutation = (args: {
    resolvePolicyByKind: func_ResolvePolicyByKind;
    kv: Deno.Kv;
}) => {
    const { resolvePolicyByKind, kv } = args;
    return {
        add_block: async (args: { kind: number; pubkey: string }) => {
            const policy = await resolvePolicyByKind(args.kind);
            policy.block.add(args.pubkey);
            await kv.set(["policy", args.kind], policy);
            return policy;
        },
        remove_block: async (args: { kind: number; pubkey: string }) => {
            const policy = await resolvePolicyByKind(args.kind);
            policy.block.delete(args.pubkey);
            await kv.set(["policy", args.kind], policy);
            return policy;
        },
        add_allow: async (args: { kind: number; pubkey: string }) => {
            const policy = await resolvePolicyByKind(args.kind);
            policy.allow.add(args.pubkey);
            await kv.set(["policy", args.kind], policy);
            return policy;
        },
        remove_allow: async (args: { kind: number; pubkey: string }) => {
            const policy = await resolvePolicyByKind(args.kind);
            policy.allow.delete(args.pubkey);
            await kv.set(["policy", args.kind], policy);
            return policy;
        },
        set_policy: async (
            args: {
                kind: NostrKind;
                read?: boolean;
                write?: boolean;
            },
        ) => {
            const policy = await resolvePolicyByKind(args.kind);
            if (args.read != undefined) {
                policy.read = args.read;
            }
            if (args.write != undefined) {
                policy.write = args.write;
            }
            await kv.set(["policy", args.kind], policy);
            return policy;
        },
    };
};

export function RootResolver(args: {
    resolvePolicyByKind: func_ResolvePolicyByKind;
    kv: Deno.Kv;
}) {
    return {
        policies: Policies(args.kv),
        ...Mutation(args),
    };
}
