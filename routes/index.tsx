
import { PageProps, RouteContext } from "$fresh/server.ts";
import { NostrEvent } from "https://raw.githubusercontent.com/BlowaterNostr/nostr.ts/main/nostr.ts";
import { ws_handler } from "./ws.ts";


export const kv = await Deno.openKv();

export default async function Home(req: Request, ctx: RouteContext) {
  console.log(req.headers.get("accept"))
  if(req.headers.get("accept") == "application/nostr+json") {
    const resp = new Response(JSON.stringify({
      name: "Relayed",
      version: "alpha",
      software: "https://github.com/BlowaterNostr/relayed"
    } as RelayInformation))
    resp.headers.set("Access-Control-Allow-Origin", "*");
    return resp
  }


  if(req.headers.get("upgrade") == "websocket") {
    return ws_handler(req)
  }

  const events = kv.list<NostrEvent>({
    prefix:[]
  })
  const set = new Set()
  let event_count = 0;
  for await (const entry of events) {
    const event = entry.value
    set.add(event.pubkey)
    event_count++
  }

  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Welcome to Relayed</h1>
        <div>Public Keys: {set.size}</div>
        <div>Event: {event_count}</div>
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
