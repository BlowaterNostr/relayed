import { NostrEvent, NostrKind, PublicKey } from "../_libs.ts";
import { pubkey_resolver } from "./pubkey.ts";

export type Actor = {
    type: "admin";
} | {
    type: "user";
    npub: string;
};

export const EventResolverFactory = (kv: Deno.Kv) =>
    class EventResolver {
        id: string;
        sig: string;
        kind: NostrKind;
        content: string;

        static Resolve(event: NostrEvent) {
            // const policy = kv.get(["policy", event.kind])
            return new EventResolver(event);
        }

        static async ByID(id: string) {
            const entry = await kv.get<NostrEvent>(["event", id]);
            if (entry.value) {
                return new EventResolver(entry.value);
            }
            return null;
        }

        private constructor(public event: NostrEvent) {
            this.id = this.event.id;
            this.sig = this.event.sig;
            this.kind = this.event.kind;
            this.content = this.event.content;
        }

        pubkey = () => {
            return pubkey_resolver(
                PublicKey.FromHex(this.event.pubkey) as PublicKey,
            );
        };
    };

type Pagination = {
    offset?: number | undefined;
    limit?: number | undefined;
};

// export async function EventsResolver(
//     args: { pubkey: string | undefined } & Pagination,
// ) {
//     const limit = args.limit || 10;
//     const list = kv.list<NostrEvent>({ prefix: ["event"] });
//     const res = [] as EventResolver[];
//     for await (const entry of list) {
//         if (args.pubkey == undefined || args.pubkey == entry.value.pubkey) {
//             res.push(EventResolver.Resolve(entry.value));
//             if (res.length >= limit) {
//                 break;
//             }
//         }
//     }
//     return {
//         count: res.length,
//         data: async function x() {
//             return res;
//         },
//     };
// }

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
