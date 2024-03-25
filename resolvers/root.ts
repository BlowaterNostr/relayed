import { number } from "https://esm.sh/v135/@noble/hashes@1.3.3/denonext/_assert.js";
import { kv } from "../main.tsx";
import { EventsResolver, getEventByID } from "./event.ts";
import { Policies, PolicyResolver } from "./policy.ts";
import { bool } from "https://esm.sh/v135/@noble/hashes@1.3.3/denonext/_assert.js";

export function RootResolver() {
    return {
        Query: {
            events: EventsResolver,
            event: getEventByID,
            policies: Policies,
        },
        Mutation: {
            add_block: async (_, args: { kind: number; pubkey: string }) => {
                const policy = await PolicyResolver(args.kind);
                policy.block.add(args.pubkey);
                await kv.set(["policy", args.kind], policy);
                return policy;
            },
            remove_block: async (_, args: { kind: number; pubkey: string }) => {
                const policy = await PolicyResolver(args.kind);
                policy.block.delete(args.pubkey);
                await kv.set(["policy", args.kind], policy);
                return policy;
            },
            add_allow: async (_, args: { kind: number; pubkey: string }) => {
                const policy = await PolicyResolver(args.kind);
                policy.allow.add(args.pubkey);
                await kv.set(["policy", args.kind], policy);
                return policy;
            },
            remove_allow: async (_, args: { kind: number; pubkey: string }) => {
                const policy = await PolicyResolver(args.kind);
                policy.allow.delete(args.pubkey);
                await kv.set(["policy", args.kind], policy);
                return policy;
            },
            set_policy: async (
                _,
                args: {
                    kind: number;
                    read: boolean | undefined;
                    write: boolean | undefined;
                },
            ) => {
                console.log(args);
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
        },
    };
}
