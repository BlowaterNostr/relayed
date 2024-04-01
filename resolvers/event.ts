import { NostrEvent, NostrKind, PublicKey } from "../_libs.ts";
import { pubkey_resolver } from "./pubkey.ts";

export type Actor = {
    type: "admin";
} | {
    type: "user";
    npub: string;
};

type Pagination = {
    offset?: number | undefined;
    limit?: number | undefined;
};

export type func_GetEventsByIDs = (ids: string[]) => Promise<NostrEvent[]>;
export const GetEventsByIDs = (kv: Deno.Kv): func_GetEventsByIDs => async (ids: string[]) => {
    const entries = await kv.getMany<NostrEvent[]>(ids.map((id) => ["event", id]));
    return fromEntries(entries);
};

export type func_GetEventsByKinds = (kinds: NostrKind[]) => AsyncIterable<NostrEvent>;
export const GetEventsByKinds = (kv: Deno.Kv): func_GetEventsByKinds =>
    async function* x(kinds: NostrKind[]) {
        for (const kind of kinds) {
            const list = kv.list<NostrEvent>({ prefix: ["event", kind] });
            for await (const entry of list) {
                console.log(entry);
                if (entry.value) {
                    yield entry.value;
                }
            }
        }
    };

function fromEntries<T>(entries: Deno.KvEntryMaybe<T>[]) {
    const events: T[] = [];
    for (const entry of entries) {
        if (entry.value) {
            events.push(entry.value);
        }
    }
    return events;
}

export type func_WriteEvent = (event: NostrEvent) => Promise<boolean>;
export const WriteEvent = (kv: Deno.Kv): func_WriteEvent => async (event: NostrEvent) => {
    const result = await kv.atomic()
        .set(["event", event.id], event)
        .set(["event", event.kind, event.id], event)
        .set(["event", event.pubkey, event.id], event)
        .commit();

    return result.ok;
};
