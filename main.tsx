import { GraphQLHTTP } from "https://deno.land/x/gql@1.2.4/mod.ts";
import { makeExecutableSchema } from "npm:@graphql-tools/schema@10.0.0";
import {
    NostrEvent,
    NostrKind,
} from "https://raw.githubusercontent.com/BlowaterNostr/nostr.ts/main/nostr.ts";
import { typeDefs } from "./graphql-schema.ts";
import { ws_handler } from "./ws.ts";
import { EventResolver, getEventByID } from "./resolvers/event.ts";
import Error404 from "./routes/_404.tsx";
import { render } from "https://esm.sh/preact-render-to-string@6.4.1";
import { RootResolver } from "./resolvers/root.ts";

const schema = makeExecutableSchema({ resolvers: RootResolver(), typeDefs });

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
    const resp = new Response(render(Error404()), { status: 404 });
    resp.headers.set("content-type", "html");
    return resp;
});

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

export const kv = await Deno.openKv();
