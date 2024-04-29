import { typeDefs } from "./graphql-schema.ts";
import { SubscriptionMap, ws_handler } from "./ws.ts";
import { render } from "https://esm.sh/preact-render-to-string@6.4.1";
import { RootResolver } from "./resolvers/root.ts";
import * as gql from "https://esm.sh/graphql@16.8.1";
import { Policy } from "./resolvers/policy.ts";
import { func_ResolvePolicyByKind } from "./resolvers/policy.ts";
import { NostrEvent, NostrKind, PublicKey, verifyEvent } from "./_libs.ts";
import { PolicyStore } from "./resolvers/policy.ts";
import { Policies } from "./resolvers/policy.ts";
import {
    func_GetReplaceableEvents,
    func_WriteReplaceableEvent,
    interface_GetEventsByAuthors,
} from "./resolvers/event.ts";
import Landing from "./routes/landing.tsx";
import Error404 from "./routes/_404.tsx";
import { RelayInformation, RelayInformationStore } from "./resolvers/nip11.ts";
import {
    EventStore,
    func_GetEventsByFilter,
    func_GetEventsByIDs,
    func_GetEventsByKinds,
    func_MarkEventDeleted,
    func_WriteRegularEvent,
} from "./resolvers/event.ts";
import { Cookie, getCookies, setCookie } from "https://deno.land/std@0.224.0/http/cookie.ts";

const schema = gql.buildSchema(gql.print(typeDefs));

export type DefaultPolicy = {
    allowed_kinds: "all" | "none" | NostrKind[];
};

export type Relay = {
    server: Deno.HttpServer;
    url: string;
    shutdown: () => Promise<void>;
    set_policy: (args: {
        kind: NostrKind;
        read?: boolean | undefined;
        write?: boolean | undefined;
        block?: Set<string>;
    }) => Promise<Policy | Error>;
    get_policy: (kind: NostrKind) => Promise<Policy>;
    set_relay_information: (
        args: { name?: string; description?: string; pubkey?: string; contact?: string; icon?: string },
    ) => Promise<RelayInformation>;
    get_relay_information: () => Promise<RelayInformation>;
    default_policy: DefaultPolicy;
};

export async function run(args: {
    port: number;
    admin?: PublicKey;
    default_information: RelayInformation;
    default_policy: DefaultPolicy;
    kv?: Deno.Kv;
}): Promise<Error | Relay> {
    const connections = new Map<WebSocket, SubscriptionMap>();
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
            connections,
            resolvePolicyByKind: policyStore.resolvePolicyByKind,
            get_events_by_IDs: eventStore.get_events_by_IDs.bind(eventStore),
            get_events_by_kinds: eventStore.get_events_by_kinds.bind(eventStore),
            get_events_by_authors: eventStore.get_events_by_authors.bind(eventStore),
            get_events_by_filter: eventStore.get_events_by_filter.bind(eventStore),
            get_replaceable_events: eventStore.get_replaceable_events.bind(eventStore),
            mark_event_deleted: eventStore.mark_event_deleted,
            write_regular_event: eventStore.write_regular_event.bind(eventStore),
            write_replaceable_event: eventStore.write_replaceable_event,
            policyStore,
            relayInformationStore,
            kv: args.kv,
        }),
    );

    return {
        server,
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
    write_regular_event: func_WriteRegularEvent;
    write_replaceable_event: func_WriteReplaceableEvent;
    get_events_by_IDs: func_GetEventsByIDs;
    get_events_by_kinds: func_GetEventsByKinds;
    get_events_by_filter: func_GetEventsByFilter;
    mark_event_deleted: func_MarkEventDeleted;
    get_replaceable_events: func_GetReplaceableEvents;
} & interface_GetEventsByAuthors;

const root_handler = (
    args: {
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
    if (pathname === "/api/auth/login") {
        const body = await req.json();
        if (!body) {
            return new Response(`{"errors":"request body is null"}`, { status: 400 });
        }
        const result = await verifyToken(body, args.relayInformationStore);
        if (!result.success) {
            return new Response(JSON.stringify(result), { status: 400 });
        } else {
            const auth = btoa(JSON.stringify(body));
            const headers = new Headers();
            const cookie: Cookie = {
                name: "token",
                value: auth,
                path: "/",
                secure: true,
                httpOnly: true,
                sameSite: "Strict",
            };
            setCookie(headers, cookie);
            const resp = new Response("", { status: 200, headers });
            return resp;
        }
    }
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
        kv: Deno.Kv;
        policyStore: PolicyStore;
        relayInformationStore: RelayInformationStore;
    },
) =>
async (req: Request) => {
    if (req.method == "POST") {
        try {
            const query = await req.json();
            const cookies = getCookies(req.headers);
            const token = cookies.token;
            if (!token) {
                return new Response(`{"errors":"no token"}`);
            }
            const event = JSON.parse(atob(token));
            const body = await verifyToken(event, args.relayInformationStore);
            if (!body.success) {
                return new Response(`{"errors":"${body.error}"}`);
            }
            const result = await gql.graphql({
                schema: schema,
                source: query.query,
                variableValues: query.variables,
                rootValue: RootResolver(args),
            });
            return new Response(JSON.stringify(result));
        } catch (error) {
            return new Response(`{"errors":"${error}"}`);
        }
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

async function verifyToken(event: NostrEvent, relayInformationStore: RelayInformationStore) {
    try {
        if (!await verifyEvent(event)) {
            throw new Error("token not verified");
        }
        const pubkey = PublicKey.FromString(event.pubkey);
        if (pubkey instanceof Error) {
            throw new Error("pubkey not valid");
        }
        if (pubkey.hex !== (await relayInformationStore.resolveRelayInformation()).pubkey.hex) {
            throw new Error("not admin");
        }
        return {
            success: true,
        };
    } catch (error) {
        return {
            success: false,
            error: error.toString(),
        };
    }
}

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
        height: 95vh;
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
    <button id="nip7">Login with NIP-07 extensions</button>
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
      const nip7 = document.getElementById('nip7');
        nip7.onclick = async () => {
            if ("nostr" in window) {
                try {
                    const ext = window.nostr;
                    const pubkey = await ext.getPublicKey();
                    const unsigned_event = {
                        pubkey,
                        content: "",
                        created_at: Math.floor(Date.now() / 1000),
                        kind: 27235,
                        tags: [],
                    }
                    const event = await ext.signEvent(unsigned_event);
                    const response = await fetch('/api/auth/login', {
                        method: 'POST',
                        body: JSON.stringify(event),
                    })
                    if(response.status === 200) {
                        nip7.innerText = "Logged in";
                    } else {
                        const text = await response.text();
                        alert(text || "Login failed");
                    }
                } catch (e) {
                    console.error(e);
                }
            } else {
                alert("Nostr extension not found");
            }
        };
    </script>
  </body>
</html>`;
