import { GraphQLHTTP } from "https://deno.land/x/gql@1.2.4/mod.ts";
import { makeExecutableSchema } from "https://esm.sh/graphql-tools@9.0.1";
import { gql } from "https://deno.land/x/graphql_tag@0.1.2/mod.ts";
import { NostrEvent } from "https://raw.githubusercontent.com/BlowaterNostr/nostr.ts/main/nostr.ts";
import { PublicKey } from "https://raw.githubusercontent.com/BlowaterNostr/nostr.ts/main/key.ts";

const typeDefs = gql`
  type Query {
    hello: String
    events(pubkey: String): Events
    policies: [Policy]
  }
  type Mutation {
    block(kind: Int, pubkey: String, ): Policy
  }
  type Events {
    count: Int!
    data: [Event]
  }
  type Event {
    id: String
    content: String
    pubkey: String
    kind: Int
    created_at: Int
    sig: String
    tags: [Tag]
  }
  enum Tag = P_Tag | E_Tag
  type P_Tag {
    name: string! # p
    value: string!
  }
  type E_Tag {
    name: string! # p
    value: string!
    relay: string
    kind: string
  }
  type Policy {
    kind: Int
    read: Boolean
    write: Boolean
    allow: [PublicKey]
    block: [PublicKey]
  }
  type PublicKey {
    hex: String
    bech32: String
    events: [Event]
  }
`;

const schema = makeExecutableSchema({ resolvers: resolvers(), typeDefs });

Deno.serve({
    port: 8000,
    onListen({ hostname, port }) {
        console.log(`☁  Started on http://${hostname}:${port}`);
    },
}, async (req) => {
    const { pathname } = new URL(req.url);
    return pathname === "/api"
        ? await GraphQLHTTP<Request>({
            schema,
            graphiql: true,
        })(req)
        : new Response("Not Found", { status: 404 });
});

const kv = await Deno.openKv();

function resolvers() {
    return {
        Query: {
            hello: () => `Hello World!`,
            events: EventsResolver,
            policies: Policies,
        },
        Mutation: {
            block: async (_, args: { kind: number; pubkey: string }) => {
                await kv.set(["policy", args.kind], {
                    block: [args.pubkey],
                });
                const pub = PublicKey.FromString(args.pubkey) as PublicKey;
                return {
                    kind: args.kind,
                    read: true,
                    write: false,
                    block: [pub],
                };
            },
        },
    };
}

async function EventsResolver(_, args: { pubkey: string }) {
    console.log(arguments);
    const list = kv.list<NostrEvent>({ prefix: [] });
    const res = [] as NostrEvent[];
    for await (const entry of list) {
        console.log(entry.value);
        if (args.pubkey == entry.value.pubkey) {
            res.push(entry.value);
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
