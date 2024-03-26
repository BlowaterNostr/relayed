import {
    NostrEvent,
    NostrKind,
} from "https://raw.githubusercontent.com/BlowaterNostr/nostr.ts/main/nostr.ts";
import { kv } from "../main.tsx";
import { PublicKey } from "https://raw.githubusercontent.com/BlowaterNostr/nostr.ts/main/key.ts";
import { pubkey_resolver } from "./pubkey.ts";

export async function getEventByID(
    _,
    args: { id: number },
): Promise<EventResolver | null> {
    const entry = await kv.get<NostrEvent>(["event", args.id]);
    if (entry.value == null) {
        return null;
    }
    return new EventResolver(entry.value);
}

export class EventResolver {
    id: string;
    sig: string;
    kind: NostrKind;
    content: string;
    constructor(public event: NostrEvent) {
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
}

type Pagination = {
    offset?: number | undefined;
    limit?: number | undefined;
};

export async function EventsResolver(
    args: { pubkey: string | undefined } & Pagination,
) {
    const limit = args.limit || 10;
    const list = kv.list<NostrEvent>({ prefix: ["event"] });
    const res = [] as EventResolver[];
    for await (const entry of list) {
        if (args.pubkey == undefined || args.pubkey == entry.value.pubkey) {
            res.push(new EventResolver(entry.value));
            if (res.length >= limit) {
                break;
            }
        }
    }
    return {
        count: res.length,
        data: async function x() {
            return res;
        },
    };
}
