import { FreshContext, Handler, PageProps, RouteContext } from "$fresh/server.ts";
import { NostrEvent } from "https://raw.githubusercontent.com/BlowaterNostr/nostr.ts/main/nostr.ts";
import { ws_handler } from "./ws.ts";
import Login from "../islands/login.tsx";
import { GraphQLHTTP } from "https://deno.land/x/gql@2.0.1/mod.ts";
import * as graphql from "https://esm.sh/graphql@16.8.1";

const schema = graphql.buildSchema(`
type Query {
  hello: String
}
`)

const resolvers = {
  Query: {
    hello: () => `Hello World!`,
  },
}


export const kv = await Deno.openKv();

export const handler: Handler = async function Home(req: Request, ctx: FreshContext) {
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
      source: await req.text()
    })

    return <html>
      <link href="https://unpkg.com/graphiql/graphiql.min.css" rel="stylesheet" />
      <script src="https://unpkg.com/graphiql/graphiql.min.js"></script>
    </html>;

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

}

export default function View(props: PageProps<{size: number}>) {
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <Login></Login>
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
            <img
                class="my-6"
                src="/logo.svg"
                width="128"
                height="128"
                alt="the Fresh logo: a sliced lemon dripping with juice"
            />
            <h1 class="text-4xl font-bold">Welcome to Relayed</h1>
            <div>Public Keys: {props.data.size}</div>
            <table class="table-auto border w-[70%]">
                <thead class="border">
                    <tr class="border">
                        <th class="border">Kind</th>
                        <th class="border">Read</th>
                        <th class="border">Write</th>
                        <th class="border">Count</th>
                    </tr>
                </thead>
                <tbody class="border">
                    <tr class="border">
                        <td class="border">0</td>
                        <td class="border">Yes</td>
                        <td class="border">Yes</td>
                        <td class="border">11</td>
                    </tr>
                    <tr class="border">
                        <td class="border">1</td>
                        <td class="border">Yes</td>
                        <td class="border">Yes</td>
                        <td class="border">234</td>
                    </tr>
                    <tr class="border">
                        <td class="border">4</td>
                        <td class="border">No</td>
                        <td class="border">No</td>
                        <td class="border">0</td>
                    </tr>
                    <tr class="border">
                        <td class="border">30023</td>
                        <td class="border">Yes</td>
                        <td class="border">No</td>
                        <td class="border">0</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
);
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
