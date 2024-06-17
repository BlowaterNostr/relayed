import { typeDefs } from "./graphql-schema.ts";
import { SubscriptionMap, ws_handler } from "./ws.ts";
import { render } from "https://esm.sh/preact-render-to-string@6.4.1";
import { RootResolver } from "./resolvers/root.ts";
import * as gql from "https://esm.sh/graphql@16.8.1";
import {
    add_space_member,
    func_AddSpaceMember,
    func_GetSpaceMembers,
    func_IsSpaceMember,
    func_ResolvePolicyByKind,
    get_space_members,
    is_space_member,
    Policies,
    Policy,
    PolicyStore,
} from "./resolvers/policy.ts";
import {
    event_schema_sqlite,
    func_GetEventCount,
    func_GetEventsByFilter,
    func_WriteRegularEvent,
    func_WriteReplaceableEvent,
    get_event_count_sqlite,
    get_events_by_filter_sqlite,
    write_regular_event_sqlite,
    write_replaceable_event_sqlite,
} from "./resolvers/event.ts";
import Landing from "./routes/landing.tsx";
import Error404 from "./routes/_404.tsx";
import { RelayInfomationBase, RelayInformation, RelayInformationStore } from "./resolvers/nip11.ts";
import { Cookie, getCookies, setCookie } from "https://deno.land/std@0.224.0/http/cookie.ts";
import { Event_V2, Kind_V2, NostrEvent, NostrKind, verify_event_v2, verifyEvent } from "./nostr.ts/nostr.ts";
import {
    create_channel_sqlite,
    edit_channel_sqlite,
    func_CreateChannel,
    func_EditChannel,
    func_GetChannelByID,
    get_channel_by_id_sqlite,
    sqlite_schema,
} from "./channel.ts";
import { DB } from "https://deno.land/x/sqlite@v3.8/mod.ts";
import {
    delete_event_sqlite,
    func_DeleteEvent,
    func_DeleteEventsFromPubkey,
    func_GetDeletedEventIDs,
} from "./resolvers/event_deletion.ts";
import { PublicKey } from "./nostr.ts/key.ts";
import { parseJSON } from "./nostr.ts/_helper.ts";

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
    get_policy: func_ResolvePolicyByKind;
    set_policy: (args: {
        kind: NostrKind;
        read?: boolean | undefined;
        write?: boolean | undefined;
        block?: Set<string>;
        allow?: Set<string>;
    }) => Promise<Policy | Error>;
    // channel
    get_channel_by_id: func_GetChannelByID;
    // space member
    get_space_members: func_GetSpaceMembers;
    is_space_member: func_IsSpaceMember;
    [Symbol.asyncDispose]: () => Promise<void>;
};

export const ENV_relayed_pubkey = "relayed_pubkey";

export async function run(args: {
    port?: number;
    admin?: PublicKey | string;
    auth_required: boolean;
    default_policy: DefaultPolicy;
    default_information?: RelayInfomationBase;
    kv?: Deno.Kv;
    _debug?: boolean;
}): Promise<Error | Relay> {
    //------------------
    // argument checking
    // Deno KV
    let kv = args.kv;
    if (kv == undefined) {
        kv = await Deno.openKv();
    }

    // SQLite Database
    let db: DB | undefined;
    let get_channel_by_id: func_GetChannelByID;
    db = new DB("relayed.db");
    db.execute(`${sqlite_schema}${event_schema_sqlite}`);
    get_channel_by_id = get_channel_by_id_sqlite(db);
    const write_replaceable_event = write_replaceable_event_sqlite(db);
    const write_regular_event = write_regular_event_sqlite(db);
    const get_event_count = get_event_count_sqlite(db);
    const get_events_by_filter = get_events_by_filter_sqlite(db, args._debug || false);

    // Administrator Keys
    if (args.admin == undefined) {
        const env_pubkey = Deno.env.get(ENV_relayed_pubkey);
        if (env_pubkey == undefined) {
            return new Error(
                "public key is not set. Please set env var $relayed_pubkey or pass default_information.pubkey in the argument",
            );
        }
        const p = PublicKey.FromString(env_pubkey);
        if (p instanceof Error) {
            return p;
        }
        args.admin = p;
    } else {
        if (typeof args.admin == "string") {
            const p = PublicKey.FromString(args.admin);
            if (p instanceof Error) {
                return new Error("invalid admin public key");
            }
            args.admin = p;
        }
    }
    // Relay Key
    // let system_key: string | PrivateKey | Error = args.system_key;
    // if (typeof system_key == "string") {
    //     system_key = PrivateKey.FromString(system_key);
    //     if (system_key instanceof Error) {
    //         return system_key;
    //     }
    // }
    // argument checking done
    //-----------------------

    const { default_policy } = args;
    ///////////////
    const connections = new Map<WebSocket, SubscriptionMap>();
    let resolve_hostname;
    const hostname = new Promise<string>((resolve) => {
        resolve_hostname = resolve;
    });

    const get_all_policies = Policies(kv);
    const policyStore = new PolicyStore({
        default_policy,
        initial_policies: await get_all_policies(),
        kv,
    });
    const relayInformationStore = new RelayInformationStore(
        kv,
        {
            ...args.default_information,
            pubkey: args.admin,
        },
    );

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
            // deletion
            delete_event: delete_event_sqlite(db),
            delete_events_from_pubkey: async () => {
                return [];
            },
            get_deleted_event_ids: async () => {
                return [];
            },
            connections,
            resolvePolicyByKind: policyStore.resolvePolicyByKind,
            get_event_count,
            get_events_by_filter,
            write_regular_event,
            write_replaceable_event,
            policyStore,
            relayInformationStore,
            // space member
            get_space_members: get_space_members(db),
            add_space_member: add_space_member(db),
            is_space_member: is_space_member({
                admin: args.admin,
                db,
            }),
            // channel
            create_channel: create_channel_sqlite(db),
            edit_channel: edit_channel_sqlite(db),
            kv: kv,
            _debug: args._debug ? true : false,
        }),
    );

    // const get_channel_by_id = get_channel_by_id_kv(kv)

    const shutdown = async () => {
        await server.shutdown();
        for (const socket of connections.keys()) {
            socket.close();
        }
        console.log("close db");
        kv.close();
        db?.close();
    };
    return {
        server,
        ws_url: `ws://${await hostname}:${port}`,
        http_url: `http://${await hostname}:${port}`,
        shutdown,
        // policy
        set_policy: policyStore.set_policy,
        get_policy: policyStore.resolvePolicyByKind,
        default_policy: args.default_policy,
        // info
        set_relay_information: relayInformationStore.set_relay_information,
        get_relay_information: relayInformationStore.resolveRelayInformation,
        // event
        get_event: async (id) => {
            const events = await get_events_by_filter({
                ids: [id],
            });
            return events[0];
        },
        // channel
        get_channel_by_id: (id: string) => {
            return get_channel_by_id(id);
        },
        // space member
        get_space_members: get_space_members(db),
        is_space_member: is_space_member({ admin: args.admin, db }),
        [Symbol.asyncDispose]() {
            return shutdown();
        },
    };
}

const root_handler = (
    args: {
        connections: Map<WebSocket, SubscriptionMap>;
        default_policy: DefaultPolicy;
        resolvePolicyByKind: func_ResolvePolicyByKind;
        policyStore: PolicyStore;
        relayInformationStore: RelayInformationStore;
        // channel
        create_channel: func_CreateChannel;
        edit_channel: func_EditChannel;
        // deletion
        delete_event: func_DeleteEvent;
        delete_events_from_pubkey: func_DeleteEventsFromPubkey;
        // get
        get_deleted_event_ids: func_GetDeletedEventIDs;
        get_events_by_filter: func_GetEventsByFilter;
        get_event_count: func_GetEventCount;
        // write
        write_regular_event: func_WriteRegularEvent;
        write_replaceable_event: func_WriteReplaceableEvent;
        // space member
        get_space_members: func_GetSpaceMembers;
        add_space_member: func_AddSpaceMember;
        is_space_member: func_IsSpaceMember;
        // config
        auth_required: boolean;
        kv: Deno.Kv;
        _debug: boolean;
    },
) =>
async (req: Request, info: Deno.ServeHandlerInfo) => {
    if (args._debug) {
        console.log(req);
    }
    const url = new URL(req.url);
    if (url.pathname === "/api/auth/login") {
        return graphql_login_handler(args)(req);
    }
    if (url.pathname == "/api/members") {
        return members_handler(args);
    }
    if (url.pathname == "/api") {
        return graphql_handler(args)(req);
    }
    if (url.pathname == "/") {
        if (req.method == "GET") {
            if (url.protocol == "http:" || url.protocol == "https:") {
                if (req.headers.get("accept")?.includes("text/html")) {
                    return landing_handler(args);
                }
                if (req.headers.get("accept")?.includes("application/nostr+json")) {
                    return information_handler(args);
                } else {
                    const relay_info = await args.relayInformationStore.resolveRelayInformation();
                    if (relay_info instanceof Error) {
                        console.error(relay_info);
                        return new Response("", { status: 500 });
                    }
                    return ws_handler({
                        ...args,
                    })(req, info);
                }
            }
        } else if (req.method == "POST") {
            return event_v2_handler(args)(req);
        }
    }
    const resp = new Response(render(Error404()), { status: 404 });
    resp.headers.set("content-type", "html");
    return resp;
};

const graphql_handler = (
    args: {
        // policy
        policyStore: PolicyStore;
        // relay info
        relayInformationStore: RelayInformationStore;
        // get
        get_events_by_filter: func_GetEventsByFilter;
        get_event_count: func_GetEventCount;
        get_space_members: func_GetSpaceMembers;
        // write
        write_regular_event: func_WriteRegularEvent;
        write_replaceable_event: func_WriteReplaceableEvent;
        // deletion
        delete_event: func_DeleteEvent;
        delete_events_from_pubkey: func_DeleteEventsFromPubkey;
        get_deleted_event_ids: func_GetDeletedEventIDs;
        // kv
        kv: Deno.Kv;
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

            const rawEvent = atobSafe(token);
            if (rawEvent instanceof Error) {
                return new Response(JSON.stringify({
                    errors: [`${rawEvent.message}`],
                }));
            }
            const event = parseJSON<NostrEvent>(rawEvent);
            if (event instanceof Error) {
                return new Response(JSON.stringify({
                    errors: [`${event.message}`],
                }));
            }
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

export const supported_nips = [1, 2, 11];
export const software = "https://github.com/BlowaterNostr/relayed";

const graphql_login_handler =
    (args: { relayInformationStore: RelayInformationStore }) => async (req: Request) => {
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
    };

const members_handler = async (args: { get_space_members: func_GetSpaceMembers }) => {
    const members = await args.get_space_members();
    if (members instanceof Error) {
        console.log(members);
        return new Response("", { status: 500 });
    }
    const body = {
        data: members.map((event) => event.member),
    };
    const resp = new Response(JSON.stringify(body), {
        status: 200,
    });
    resp.headers.set("content-type", "application/json; charset=utf-8");
    resp.headers.set("Access-Control-Allow-Origin", "*");
    resp.headers.set("Access-Control-Allow-Methods", "GET");
    resp.headers.set("Access-Control-Allow-Headers", "accept,content-type");
    return resp;
};

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
    const resp = new Response(JSON.stringify(storeInformation), {
        status: 200,
    });
    resp.headers.set("content-type", "application/json; charset=utf-8");
    resp.headers.set("Access-Control-Allow-Origin", "*");
    resp.headers.set("Access-Control-Allow-Methods", "GET");
    resp.headers.set("Access-Control-Allow-Headers", "accept,content-type");
    return resp;
};

const event_v2_handler = (args: {
    create_channel: func_CreateChannel;
    edit_channel: func_EditChannel;
    add_space_member: func_AddSpaceMember;
}) =>
async (req: Request) => {
    const text = await req.text();
    const event = parseJSON<Event_V2>(text);
    if (event instanceof Error) {
        return new Response(event.message, {
            status: 400,
        });
    }
    const ok = await verify_event_v2(event);
    if (!ok) {
        console.error("event", event);
        return new Response("event is not valid", { status: 400 });
    }
    if (event.kind == Kind_V2.ChannelCreation) {
        const ok = await args.create_channel(event);
        if (ok) {
            return new Response();
        } else {
            return new Response("failed to write event", { status: 400 });
        }
    } else if (event.kind == Kind_V2.ChannelEdition) {
        const res = await args.edit_channel(event);
        if (res instanceof Error) {
            return new Response(res.message, { status: 400 });
        }
        return new Response();
    } else if (event.kind == Kind_V2.SpaceMember) {
        const res = await args.add_space_member(event);
        if (res instanceof Error) {
            console.error(res);
            return new Response(res.message, { status: 400 });
        }
        return new Response();
    } else {
        return new Response(`not a recognizable event`, { status: 400 });
    }
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

export function atobSafe(data: string) {
    try {
        return atob(data);
    } catch (e) {
        return e as Error;
    }
}
