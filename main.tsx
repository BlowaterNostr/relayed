import { typeDefs } from "./graphql-schema.ts";
import { SubscriptionMap, ws_handler } from "./ws.ts";
import { render } from "https://esm.sh/preact-render-to-string@6.4.1";
import { RootResolver } from "./resolvers/root.ts";
import * as gql from "https://esm.sh/graphql@16.8.1";
import { Policy } from "./resolvers/policy.ts";
import { func_ResolvePolicyByKind } from "./resolvers/policy.ts";
import { NostrEvent, NostrKind, parseJSON, PublicKey, verify_event_v2, verifyEvent } from "./_libs.ts";
import { PolicyStore } from "./resolvers/policy.ts";
import { Policies } from "./resolvers/policy.ts";
import {
    event_v1_schema_sqlite,
    func_GetEventCount,
    func_GetEventsByAuthors,
    func_GetReplaceableEvents,
    func_WriteReplaceableEvent,
} from "./resolvers/event.ts";
import Landing from "./routes/landing.tsx";
import Error404 from "./routes/_404.tsx";
import {
    informationPubkeyStringify,
    RelayInformation,
    RelayInformationStore,
    RelayInformationStringify,
} from "./resolvers/nip11.ts";
import {
    Event_V1_Store,
    func_DeleteEvent,
    func_GetEventsByFilter,
    func_GetEventsByIDs,
    func_GetEventsByKinds,
    func_WriteRegularEvent,
} from "./resolvers/event.ts";
import { Cookie, getCookies, setCookie } from "https://deno.land/std@0.224.0/http/cookie.ts";
import { sleep } from "https://raw.githubusercontent.com/BlowaterNostr/csp/master/csp.ts";
import { Event_V2, Kind_V2 } from "./events.ts";
import {
    create_channel_sqlite,
    edit_channel_sqlite,
    get_channel_by_id_sqlite,
    sqlite_schema,
} from "./channel.ts";
import { func_GetChannelByID } from "./channel.ts";
import { DB } from "https://deno.land/x/sqlite@v3.8/mod.ts";

const schema = gql.buildSchema(gql.print(typeDefs));

export type DefaultPolicy = {
    allowed_kinds: "all" | "none" | NostrKind[];
};

export type Relay = {
    server: Deno.HttpServer;
    ws_url: string;
    http_url: string;
    shutdown: () => Promise<void>;

    get_event: (id: string) => Promise<NostrEvent | null>;
    set_relay_information: (args: {
        name?: string;
        description?: string;
        contact?: string;
        icon?: string;
    }) => Promise<RelayInformation | Error>;
    get_relay_information: () => Promise<RelayInformation | Error>;
    // policy
    default_policy: DefaultPolicy;
    get_policy: (kind: NostrKind) => Promise<Policy>;
    set_policy: (args: {
        kind: NostrKind;
        read?: boolean | undefined;
        write?: boolean | undefined;
        block?: Set<string>;
        allow?: Set<string>;
    }) => Promise<Policy | Error>;
    // channel
    get_channel_by_id: func_GetChannelByID;
};

const ENV_relayed_pubkey = "relayed_pubkey";

export async function run(args: {
    port?: number;
    admin?: PublicKey;
    default_policy: DefaultPolicy;
    default_information?: RelayInformationStringify;
    kv?: Deno.Kv;
    _debug?: boolean;
}): Promise<Error | Relay> {
    const isDenoDeploy = Deno.env.get("DENO_DEPLOYMENT_ID") !== undefined;
    // argument checking
    let kv = args.kv;
    if (kv == undefined) {
        kv = await Deno.openKv();
    }

    let db: DB | undefined;
    let get_channel_by_id: func_GetChannelByID;
    if (!isDenoDeploy) {
        db = new DB("relayed.db");
        db.execute(`${sqlite_schema}${event_v1_schema_sqlite}`);
        get_channel_by_id = get_channel_by_id_sqlite(db);
    }

    let admin_pubkey: string | undefined | PublicKey | Error = args.default_information?.pubkey;
    if (admin_pubkey == undefined) {
        const env_pubkey = Deno.env.get(ENV_relayed_pubkey);
        if (env_pubkey == undefined) {
            return new Error(
                "public key is not set. Please set env var $relayed_pubkey or pass default_information.pubkey in the argument",
            );
        }
        admin_pubkey = env_pubkey;
    }

    admin_pubkey = PublicKey.FromString(admin_pubkey);
    if (admin_pubkey instanceof Error) {
        return admin_pubkey;
    }

    const { default_policy } = args;
    ///////////////
    const connections = new Map<WebSocket, SubscriptionMap>();
    let resolve_hostname;
    const hostname = new Promise<string>((resolve) => {
        resolve_hostname = resolve;
    });

    const get_all_policies = Policies(kv);
    const policyStore = new PolicyStore(default_policy, kv, await get_all_policies());
    const relayInformationStore = new RelayInformationStore(
        kv,
        {
            ...args.default_information,
            pubkey: admin_pubkey,
        },
    );

    const eventStore = await Event_V1_Store.New(kv);

    const port = args.port || 8000;
    delete args.port;
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
            get_event_count: eventStore.get_event_count,
            delete_event: eventStore.delete_event,
            write_regular_event: eventStore.write_regular_event.bind(eventStore),
            write_replaceable_event: eventStore.write_replaceable_event,
            policyStore,
            relayInformationStore,
            kv,
            db: db,
            // get_channel_by_name: get_channel_by_name(db)
            _debug: args._debug ? true : false,
        }),
    );

    // const get_channel_by_id = get_channel_by_id_kv(kv)

    return {
        server,
        ws_url: `ws://${await hostname}:${port}`,
        http_url: `http://${await hostname}:${port}`,
        shutdown: async () => {
            await server.shutdown();
            args.kv?.close();
            db?.close();
        },
        // policy
        set_policy: policyStore.set_policy,
        get_policy: policyStore.resolvePolicyByKind,
        default_policy: args.default_policy,
        // info
        set_relay_information: relayInformationStore.set_relay_information,
        get_relay_information: relayInformationStore.resolveRelayInformation,
        // event
        get_event: eventStore.get_event,
        // channel
        get_channel_by_id: (id: string) => {
            return get_channel_by_id(id);
        },
    };
}

export type EventReadWriter = {
    delete_event: func_DeleteEvent;
    write_regular_event: func_WriteRegularEvent;
    write_replaceable_event: func_WriteReplaceableEvent;
    get_events_by_IDs: func_GetEventsByIDs;
    get_events_by_kinds: func_GetEventsByKinds;
    get_events_by_filter: func_GetEventsByFilter;
    get_replaceable_events: func_GetReplaceableEvents;
    get_events_by_authors: func_GetEventsByAuthors;
    get_event_count: func_GetEventCount;
};

const root_handler = (
    args: {
        connections: Map<WebSocket, SubscriptionMap>;
        default_policy: DefaultPolicy;
        resolvePolicyByKind: func_ResolvePolicyByKind;
        policyStore: PolicyStore;
        relayInformationStore: RelayInformationStore;
        // get_channel_by_name: func_GetChannelByName;
        kv: Deno.Kv;
        db?: DB;
        _debug: boolean;
    } & EventReadWriter,
) =>
async (req: Request, info: Deno.ServeHandlerInfo) => {
    if (args._debug) {
        console.log(req);
    }
    const { pathname, protocol } = new URL(req.url);
    if (pathname === "/api/auth/login") {
        const body = await req.json();
        if (!body) {
            return new Response(`{"errors":"request body is null"}`, { status: 400 });
        }
        const error = await verifyToken(body, args.relayInformationStore);
        if (error instanceof Error) {
            return new Response(JSON.stringify(error.message), { status: 400 });
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
        if (req.method == "GET") {
            if (protocol == "http:" || protocol == "https:") {
                if (req.headers.get("accept")?.includes("text/html")) {
                    return landing_handler(args);
                }
                if (req.headers.get("accept")?.includes("application/nostr+json")) {
                    return information_handler(args);
                } else {
                    return ws_handler(args)(req, info);
                }
            }
        } else if (req.method == "POST") {
            if (!args.db) {
                return new Response("POST is not supported in this environment", { status: 400 });
            }
            const text = await req.text();
            const event = parseJSON<Event_V2>(text);
            if (event instanceof Error) {
                return new Response(event.message, {
                    status: 400,
                });
            }
            const ok = await verify_event_v2(event);
            if (!ok) {
                return new Response("event is not valid", { status: 400 });
            }
            if (event.kind == Kind_V2.ChannelCreation) {
                const ok = await create_channel_sqlite(args.db)(event);
                if (ok) {
                    return new Response();
                } else {
                    return new Response("failed to write event", { status: 400 });
                }
            } else if (event.kind == Kind_V2.ChannelEdition) {
                const res = await edit_channel_sqlite(args.db)(event);
                if (res instanceof Error) {
                    return new Response(res.message, { status: 400 });
                }
                return new Response();
            } else {
                return new Response(`not a recognizable event`, { status: 400 });
            }
        }
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
        get_events_by_authors: func_GetEventsByAuthors;
        get_events_by_kinds: func_GetEventsByKinds;
        get_event_count: func_GetEventCount;
        // get_channel_by_name: func_GetChannelByName;
        delete_event: func_DeleteEvent;
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
            const error = await verifyToken(event, args.relayInformationStore);
            if (error instanceof Error) {
                return new Response(JSON.stringify({
                    errors: [error.message],
                }));
            }
            const result = await gql.graphql({
                schema: schema,
                source: query.query,
                variableValues: query.variables,
                rootValue: RootResolver({ deps: args }),
            });
            return new Response(JSON.stringify(result));
        } catch (error) {
            return new Response(JSON.stringify({
                errors: [`${error}`],
            }));
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
    const storeInformation = await args.relayInformationStore.resolveRelayInformation();
    if (storeInformation instanceof Error) {
        return new Response(render(Error404()), { status: 404 });
    }
    const resp = new Response(
        render(Landing(storeInformation), { status: 200 }),
    );
    resp.headers.set("content-type", "html");
    return resp;
};

const information_handler = async (args: { relayInformationStore: RelayInformationStore }) => {
    const storeInformation = await args.relayInformationStore.resolveRelayInformation();
    if (storeInformation instanceof Error) {
        return new Response(render(Error404()), { status: 404 });
    }
    const information = informationPubkeyStringify(storeInformation);
    const resp = new Response(JSON.stringify(information), {
        status: 200,
    });
    resp.headers.set("content-type", "application/json; charset=utf-8");
    resp.headers.set("Access-Control-Allow-Origin", "*");
    resp.headers.set("Access-Control-Allow-Methods", "GET");
    resp.headers.set("Access-Control-Allow-Headers", "accept,content-type");
    return resp;
};

async function verifyToken(event: NostrEvent, relayInformationStore: RelayInformationStore) {
    if (!await verifyEvent(event)) {
        return new Error("token not verified");
    }
    const pubkey = PublicKey.FromString(event.pubkey);
    if (pubkey instanceof Error) {
        return pubkey;
    }
    const storeInformation = await relayInformationStore.resolveRelayInformation();
    if (storeInformation instanceof Error) {
        return storeInformation;
    }
    if (pubkey.hex !== storeInformation.pubkey.hex) {
        return new Error("your pubkey is not an admin");
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
