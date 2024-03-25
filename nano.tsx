import { GraphQLHTTP } from "https://deno.land/x/gql@1.2.4/mod.ts";
import { makeExecutableSchema } from "npm:@graphql-tools/schema@10.0.0";
import { gql } from "https://deno.land/x/graphql_tag@0.1.2/mod.ts";
import {
    NostrEvent,
    NostrKind,
} from "https://raw.githubusercontent.com/BlowaterNostr/nostr.ts/main/nostr.ts";
import { typeDefs } from "./schema.ts";
import { ws_handler } from "./ws.ts";
import { EventResolver, getEventByID } from "./t.ts";

const schema = makeExecutableSchema({ resolvers: resolvers(), typeDefs });

Deno.serve({
    port: 8000,
    onListen({ hostname, port }) {
        console.log(`☁  Started on http://${hostname}:${port}`);
    },
}, async (req) => {
    const { pathname } = new URL(req.url);
    if (pathname == "/api") {
        return GraphQLHTTP<Request>({
            schema,
            graphiql: true,
        })(req);
    }
    if (pathname == "/") {
        return ws_handler(req);
    }
    return new Response("Not Found", { status: 404 });
});

export const kv = await Deno.openKv();

function resolvers() {
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
        },
    };
}

async function EventsResolver(_, args: { pubkey: string }) {
    console.log(arguments);
    const list = kv.list<NostrEvent>({ prefix: ["event"] });
    const res = [] as EventResolver[];
    for await (const entry of list) {
        console.log(entry.value);
        if (args.pubkey == entry.value.pubkey) {
            res.push(new EventResolver(entry.value));
        }
    }
    return {
        count: res.length,
        data: async function x() {
            return res;
        },
    };
}

export async function Policies() {
    const list = kv.list<NostrEvent>({ prefix: ["policy"] });
    const res = [] as NostrEvent[];
    for await (const entry of list) {
        console.log(entry.value);
        res.push(entry.value);
    }
    return res;
}

async function PolicyResolver(kind: NostrKind): Promise<Policy> {
    const entry = await kv.get<Policy>(["policy", kind]);
    if (entry.value == null) {
        return {
            kind: kind,
            read: true,
            write: true,
            allow: new Set(),
            block: new Set(),
        };
    }
    const policy = entry.value;
    console.log(policy);

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
}

type Policy = {
    kind: NostrKind;
    read: boolean;
    write: boolean;
    allow: Set<string>;
    block: Set<string>;
};
