import { kv } from "../main.tsx";
import { EventsResolver, getEventByID } from "./event.ts";
import { Policies, PolicyResolver } from "./policy.ts";

const Query = {
    events: EventsResolver,
    event: getEventByID,
    policies: Policies,
};

const Mutation = {
    add_block: async (args: { kind: number; pubkey: string }) => {
        const policy = await PolicyResolver(args.kind);
        policy.block.add(args.pubkey);
        await kv.set(["policy", args.kind], policy);
        return policy;
    },
    remove_block: async (args: { kind: number; pubkey: string }) => {
        const policy = await PolicyResolver(args.kind);
        policy.block.delete(args.pubkey);
        await kv.set(["policy", args.kind], policy);
        return policy;
    },
    add_allow: async (args: { kind: number; pubkey: string }) => {
        const policy = await PolicyResolver(args.kind);
        policy.allow.add(args.pubkey);
        await kv.set(["policy", args.kind], policy);
        return policy;
    },
    remove_allow: async (args: { kind: number; pubkey: string }) => {
        const policy = await PolicyResolver(args.kind);
        policy.allow.delete(args.pubkey);
        await kv.set(["policy", args.kind], policy);
        return policy;
    },
    set_policy: async (
        args: {
            kind: number;
            read: boolean | undefined;
            write: boolean | undefined;
        },
    ) => {
        const policy = await PolicyResolver(args.kind);
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

export function RootResolver() {
    return {
        ...Query,
        ...Mutation,
    };
}
