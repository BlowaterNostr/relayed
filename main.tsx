import { typeDefs } from "./graphql-schema.ts";
import { SubscriptionMap, ws_handler } from "./ws.ts";
import { render } from "https://esm.sh/preact-render-to-string@6.4.1";
import { RootResolver } from "./resolvers/root.ts";
import * as gql from "https://esm.sh/graphql@16.8.1";

import { Policy } from "./resolvers/policy.ts";
import { func_ResolvePolicyByKind } from "./resolvers/policy.ts";
import { func_GetEventsByKinds, func_WriteEvent } from "./resolvers/event.ts";
import { EventStore, func_GetEventsByIDs } from "./resolvers/event.ts";
import { NostrEvent, NostrKind, parseJSON, PublicKey, verifyEvent } from "./_libs.ts";
import { PolicyStore } from "./resolvers/policy.ts";
import { Policies } from "./resolvers/policy.ts";
import { interface_GetEventsByAuthors } from "./resolvers/event.ts";
import Landing from "./routes/landing.tsx";
import Error404 from "./routes/_404.tsx";
import { RelayInformation, RelayInformationStore } from "./resolvers/nip11.ts";
import { func_GetEventsByFilter } from "./resolvers/event.ts";

const schema = gql.buildSchema(gql.print(typeDefs));

export type DefaultPolicy = {
    allowed_kinds: "all" | "none" | NostrKind[];
};

export type Relay = {
    server: Deno.HttpServer;
    url: string;
    password: string;
    shutdown: () => Promise<void>;
    set_policy: (args: {
        kind: NostrKind;
        read?: boolean | undefined;
        write?: boolean | undefined;
        block?: Set<string>;
    }) => Promise<Policy | Error>;
    get_policy: (kind: NostrKind) => Promise<Policy>;
    set_relay_information: (args: RelayInformation) => Promise<RelayInformation>;
    get_relay_information: () => Promise<RelayInformation>;
    default_policy: DefaultPolicy;
};

export async function run(args: {
    port: number;
    admin?: PublicKey;
    password?: string;
    default_information?: RelayInformation;
    default_policy: DefaultPolicy;
    kv?: Deno.Kv;
}): Promise<Error | Relay> {
    const connections = new Map<WebSocket, SubscriptionMap>();
    let { password } = args;
    if (password == undefined) {
        password = Deno.env.get("relayed_pw");
        if (!password) {
            return new Error("password is not set, please set env var $relayed_pw");
        }
    }
    if (args.kv == undefined) {
        args.kv = await Deno.openKv();
    }

    const { port, default_policy, default_information } = args;

    let resolve_hostname;
    const hostname = new Promise<string>((resolve) => {
        resolve_hostname = resolve;
    });

    const get_all_policies = Policies(args.kv);
    const policyStore = new PolicyStore(default_policy, args.kv, await get_all_policies());
    const relayInformationStore = new RelayInformationStore(
        args.kv,
        default_information,
    );

    const eventStore = await EventStore.New(args.kv);

    const server = Deno.serve(
        {
            port,
            onListen: ({ hostname, port }) => {
                console.log(`☁  Relay server        started on   ws://${hostname}:${port}`);
                console.log(`☁  Relay admin GraphQL started on http://${hostname}:${port}/api`);
                resolve_hostname(hostname);
            },
        },
        root_handler({
            ...args,
            password,
            connections,
            resolvePolicyByKind: policyStore.resolvePolicyByKind,
            write_event: eventStore.write_event.bind(eventStore),
            get_events_by_IDs: eventStore.get_events_by_IDs.bind(eventStore),
            get_events_by_kinds: eventStore.get_events_by_kinds.bind(eventStore),
            get_events_by_authors: eventStore.get_events_by_authors.bind(eventStore),
            get_events_by_filter: eventStore.get_events_by_filter.bind(eventStore),
            policyStore,
            relayInformationStore,
            kv: args.kv,
        }),
    );

    return {
        server,
        password,
        url: `ws://${await hostname}:${port}`,
        shutdown: async () => {
            await server.shutdown();
            args.kv?.close();
        },
        set_policy: policyStore.set_policy,
        get_policy: policyStore.resolvePolicyByKind,
        set_relay_information: relayInformationStore.set_relay_information,
        get_relay_information: relayInformationStore.resolveRelayInformation,
        default_policy: args.default_policy,
    };
}

export type EventReadWriter = {
    write_event: func_WriteEvent;
    get_events_by_IDs: func_GetEventsByIDs;
    get_events_by_kinds: func_GetEventsByKinds;
    get_events_by_filter: func_GetEventsByFilter;
} & interface_GetEventsByAuthors;

const root_handler = (
    args: {
        password: string;
        information?: RelayInformation;
        connections: Map<WebSocket, SubscriptionMap>;
        default_policy: DefaultPolicy;
        resolvePolicyByKind: func_ResolvePolicyByKind;
        policyStore: PolicyStore;
        relayInformationStore: RelayInformationStore;
        kv: Deno.Kv;
    } & EventReadWriter,
) =>
async (req: Request, info: Deno.ServeHandlerInfo) => {
    console.log(info.remoteAddr);

    const { pathname, protocol } = new URL(req.url);
    if (pathname == "/api") {
        return graphql_handler(args)(req);
    }
    if (pathname == "/") {
        if (protocol == "http:" || protocol == "https:") {
            if (req.headers.get("accept")?.includes("text/html")) {
                return landing_handler(args);
            }
            if (req.headers.get("accept")?.includes("application/nostr+json")) {
                return information_handler(args);
            }
        }
        return ws_handler(args)(req, info);
    }
    const resp = new Response(render(Error404()), { status: 404 });
    resp.headers.set("content-type", "html");
    return resp;
};

const graphql_handler = (
    args: {
        password: string;
        kv: Deno.Kv;
        policyStore: PolicyStore;
        relayInformationStore: RelayInformationStore;
    },
) =>
async (req: Request) => {
    const { password, policyStore } = args;
    if (req.method == "POST") {
        const query = await req.json();
        const nip42 = req.headers.get("nip42");
        console.log("nip42 header", nip42);

        const pw = req.headers.get("password");
        if (pw != password) {
            return new Response(`{"errors":"incorrect password"}`);
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
            rootValue: RootResolver(args),
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
};

export const supported_nips = [1, 2];
export const software = "https://github.com/BlowaterNostr/relayed";

const landing_handler = async (args: { relayInformationStore: RelayInformationStore }) => {
    const resp = new Response(
        render(Landing(await args.relayInformationStore.resolveRelayInformation()), { status: 200 }),
    );
    resp.headers.set("content-type", "html");
    return resp;
};

const information_handler = async (args: { relayInformationStore: RelayInformationStore }) => {
    const resp = new Response(JSON.stringify(await args.relayInformationStore.resolveRelayInformation()), {
        status: 200,
    });
    resp.headers.set("content-type", "application/json; charset=utf-8");
    resp.headers.set("Access-Control-Allow-Origin", "*");
    resp.headers.set("Access-Control-Allow-Methods", "GET");
    resp.headers.set("Access-Control-Allow-Headers", "accept,content-type");
    return resp;
};

// export const kv = await Deno.openKv("./test-kv");

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
