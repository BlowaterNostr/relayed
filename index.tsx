import { NostrEvent } from "https://raw.githubusercontent.com/BlowaterNostr/nostr.ts/main/nostr.ts";
import { ws_handler } from "./ws.ts";
import { GraphQLHTTP } from "https://deno.land/x/gql@2.0.1/mod.ts";
import * as graphql from "https://esm.sh/graphql@16.8.1";

const schema = graphql.buildSchema(`
type Query {
  hello: String
}
`);

const resolvers = {
    Query: {
        hello: () => `Hello World!`,
    },
};

export const kv = await Deno.openKv();

export const handler = async function Home(
    req: Request,
) {
    console.log(req.headers.get("accept"));
    if (req.headers.get("accept") == "application/nostr+json") {
        const resp = new Response(JSON.stringify({
            name: "Relayed",
            version: "alpha",
            software: "https://github.com/BlowaterNostr/relayed",
        } as RelayInformation));
        resp.headers.set("Access-Control-Allow-Origin", "*");
        return resp;
    }

    if (req.headers.get("upgrade") == "websocket") {
        return ws_handler(req);
    }

    const result = await graphql.graphql({
        schema,
        source: await req.text(),
    });

    return (
        <html>
            <link
                href="https://unpkg.com/graphiql/graphiql.min.css"
                rel="stylesheet"
            />
            <script src="https://unpkg.com/graphiql/graphiql.min.js"></script>
        </html>
    );

    // const events = kv.list<NostrEvent>({
    //     prefix: [],
    // });
    // const set = new Set();
    // let event_count = 0;
    // for await (const entry of events) {
    //     const event = entry.value;
    //     set.add(event.pubkey);
    //     event_count++;
    // }

    // const res = await ctx.render({size: set.size})

    // res.headers.set("challenge", "12345")

    // return res
};

export type RelayInformation = {
    name?: string;
    description?: string;
    pubkey?: string;
    contact?: string;
    supported_nips?: number[];
    software?: string;
    version?: string;
    icon?: string;
};
