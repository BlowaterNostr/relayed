import { typeDefs } from "./graphql-schema.ts";
import { ws_handler } from "./ws.ts";
import Error404 from "./routes/_404.tsx";
import { render } from "https://esm.sh/preact-render-to-string@6.4.1";
import { RootResolver } from "./resolvers/root.ts";
import * as gql from "https://esm.sh/graphql@16.8.1";
import {
    NostrEvent,
    NostrFilters,
    verifyEvent,
} from "https://raw.githubusercontent.com/BlowaterNostr/nostr.ts/main/nostr.ts";
import { parseJSON } from "https://raw.githubusercontent.com/BlowaterNostr/nostr.ts/main/_helper.ts";
import { PublicKey } from "https://raw.githubusercontent.com/BlowaterNostr/nostr.ts/main/key.ts";

const schema = gql.buildSchema(gql.print(typeDefs));

export function run(args: {
    port: number;
    admin: PublicKey;
    password: string;
}) {
    const connections = new Map<WebSocket, Map<string, NostrFilters>>();
    Deno.addSignalListener("SIGINT", () => {
        for (const socket of connections.keys()) {
            socket.close();
        }
        Deno.exit();
    });

    const { port, password } = args;
    Deno.serve({
        port,
        onListen({ hostname, port }) {
            console.log(`☁  Started on http://${hostname}:${port}`);
        },
    }, async (req) => {
        const { pathname } = new URL(req.url);
        if (pathname == "/api") {
            return graphql_handler(password)(req);
        }
        if (pathname == "/") {
            return ws_handler(connections)(req);
        }
        const resp = new Response(render(Error404()), { status: 404 });
        resp.headers.set("content-type", "html");
        return resp;
    });
}

const graphql_handler = (password: string) => async (req: Request) => {
    if (req.method == "POST") {
        const query = await req.json();
        const nip42 = req.headers.get("nip42");
        console.log("nip42 header", nip42);

        const pw = req.headers.get("password");
        if(pw != password) {
            return new Response(`{"errors":"incorrect password"}`)
        }

        if (nip42) {
            const auth_event = parseJSON<NostrEvent>(nip42);
            if (auth_event instanceof Error) {
                return new Response(`{errors:["no auth"]}`);
            }
            const ok = await verifyEvent(auth_event);
            if (!ok) {
                return new Response(`{"errors":["no auth"]}`);
            }
        }
        const result = await gql.graphql({
            schema: schema,
            source: query.query,
            variableValues: query.variables,
            rootValue: RootResolver(),
        });
        console.log(result);
        return new Response(JSON.stringify(result));
    } else if (req.method == "GET") {
        const res = new Response(graphiql);
        res.headers.set("content-type", "html");
        return res;
    } else {
        return new Response(undefined, { status: 405 });
    }
}

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

const graphiql = `
<!--
 *  Copyright (c) 2021 GraphQL Contributors
 *  All rights reserved.
 *
 *  This source code is licensed under the license found in the
 *  LICENSE file in the root directory of this source tree.
-->
<!doctype html>
<html lang="en">
  <head>
    <title>GraphiQL</title>
    <style>
      body {
        height: 100%;
        margin: 0;
        width: 100%;
        overflow: hidden;
      }

      #graphiql {
        height: 100vh;
      }
    </style>
    <!--
      This GraphiQL example depends on Promise and fetch, which are available in
      modern browsers, but can be "polyfilled" for older browsers.
      GraphiQL itself depends on React DOM.
      If you do not want to rely on a CDN, you can host these files locally or
      include them directly in your favored resource bundler.
    -->
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <!--
      These two files can be found in the npm module, however you may wish to
      copy them directly into your environment, or perhaps include them in your
      favored resource bundler.
     -->
    <script
      src="https://unpkg.com/graphiql/graphiql.min.js"
      type="application/javascript"
    ></script>
    <link rel="stylesheet" href="https://unpkg.com/graphiql/graphiql.min.css" />
    <!--
      These are imports for the GraphIQL Explorer plugin.
     -->
    <script
      src="https://unpkg.com/@graphiql/plugin-explorer/dist/index.umd.js"
      crossorigin
    ></script>

    <link
      rel="stylesheet"
      href="https://unpkg.com/@graphiql/plugin-explorer/dist/style.css"
    />
  </head>

  <body>
    <div id="graphiql">Loading...</div>
    <script>
      const root = ReactDOM.createRoot(document.getElementById('graphiql'));
      const fetcher = GraphiQL.createFetcher({
        url: './api',
      });
      const explorerPlugin = GraphiQLPluginExplorer.explorerPlugin();
      root.render(
        React.createElement(GraphiQL, {
          fetcher,
          defaultEditorToolsVisibility: true,
          plugins: [explorerPlugin],
        }),
      );
    </script>
  </body>
</html>`;
