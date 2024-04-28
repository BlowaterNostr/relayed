import { typeDefs } from "./graphql-schema.ts";
import { SubscriptionMap, ws_handler } from "./ws.ts";
import { render } from "https://esm.sh/preact-render-to-string@6.4.1";
import { RootResolver } from "./resolvers/root.ts";
import * as gql from "https://esm.sh/graphql@16.8.1";
import { Policy } from "./resolvers/policy.ts";
import { func_ResolvePolicyByKind } from "./resolvers/policy.ts";
import { NostrKind, PublicKey, verifyEvent } from "./_libs.ts";
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
import { getCookies } from "https://deno.land/std@0.224.0/http/cookie.ts";

const schema = gql.buildSchema(gql.print(typeDefs));

export type DefaultPolicy = {
    allowed_kinds: "all" | "none" | NostrKind[];
};

export type Relay = {
    server: Deno.HttpServer;
    url: string;
    password?: string;
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
    if (args.kv == undefined) {
        args.kv = await Deno.openKv();
    }

    const { port, default_policy,default_information } = args;

    if (default_information) {
        const { pubkey } = default_information;
        if (pubkey) {
            const pubkeyArray = pubkey.split(",");
            for (const pubkey of pubkeyArray) {
                const pubkeyObj = PublicKey.FromString(pubkey);
                if (pubkeyObj instanceof Error) {
                    return pubkeyObj;
                }
            }
        }
    }

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

    const { password } = args;
    if (!password) {
        const { pubkey } = await relayInformationStore.resolveRelayInformation();
        if (!pubkey) {
            const env_pubkey = default_information?.pubkey;
            if (!env_pubkey) {
                return new Error(
                    "password or pubkey is not set, please set env var $relayed_pw or $relayed_pubkey",
                );
            }
        }
    }

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
        password?: string;
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
    if (pathname === "/api/auth/login") {
        const auth = req.headers.get("authorization");
        const body = await verifyToken(auth, args.relayInformationStore);
        const resp = new Response(JSON.stringify(body), { status: 200 });
        resp.headers.set("set-cookie", `token=${auth}; Path=/; Secure; HttpOnly; SameSite=Strict;`);
        return resp;
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
        password?: string;
        kv: Deno.Kv;
        policyStore: PolicyStore;
        relayInformationStore: RelayInformationStore;
    },
) =>
async (req: Request) => {
    if (req.method == "POST") {
        try {
            const query = await req.json();
            if (!args.password) {
                const cookies = getCookies(req.headers);
                const token = cookies.token;
                const body = await verifyToken(token, args.relayInformationStore);
                if (!body.success) {
                    return new Response(JSON.stringify(body), { status: 200 });
                }
            } else {
                const password = req.headers.get("password");
                if (password != args.password) {
                    return new Response(`{"errors":"password not correct"}`);
                }
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

async function verifyToken(token: string | null, relayInformationStore: RelayInformationStore) {
    try {
        if (!token) {
            return {
                success: false,
                error: "token not found",
            };
        }
        const [prefix, eventBase64] = token.split(" ");
        if (prefix !== "Nostr") {
            return {
                success: false,
                error: "token not Nostr",
            };
        }
        const event = JSON.parse(atob(eventBase64));
        if (!event) {
            return {
                success: false,
                error: "no auth event",
            };
        }
        if (!await verifyEvent(event)) {
            return {
                success: false,
                error: "token not verified",
            };
        }
        const { pubkey: relayPubkey } = await relayInformationStore.resolveRelayInformation();
        if (!relayPubkey) {
            return {
                success: false,
                error: "relay pubkey not set",
            };
        }
        const relayPubkeyArr = relayPubkey.split(",");
        const relayPubkeyHexArr: string[] = []
        for (const pubkey of relayPubkeyArr) {
            const relayPubkeyObj = PublicKey.FromString(pubkey);
            if (relayPubkeyObj instanceof Error) {
                return {
                    success: false,
                    error: `relay pubkey:${pubkey} not valid`,
                };
            }
            relayPubkeyHexArr.push(relayPubkeyObj.hex);
        }
        const pubkey = PublicKey.FromString(event.pubkey);
        if (pubkey instanceof Error) {
            return {
                success: false,
                error: "pubkey not valid",
            };
        }
        if (!relayPubkeyHexArr.includes(pubkey.hex)) {
            return {
                success: false,
                error: "you are not admin",
            };
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
                        headers: {
                            authorization: "Nostr " + btoa(JSON.stringify(event)),
                        },
                    })
                    const data = await response.json();
                    if(data.success) {
                        alert("Login success");
                    } else {
                        alert(data.error || "Login failed");
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
