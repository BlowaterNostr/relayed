import {
    NostrEvent,
    NostrKind,
} from "https://raw.githubusercontent.com/BlowaterNostr/nostr.ts/main/nostr.ts";
import { kv } from "../main.tsx";
import { PublicKey } from "https://raw.githubusercontent.com/BlowaterNostr/nostr.ts/main/key.ts";

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
        console.log("cons");
        this.id = this.event.id;
        this.sig = this.event.sig;
        this.kind = this.event.kind;
        this.content = this.event.content;
    }

    pubkey = () => {
        const pubkey = PublicKey.FromHex(this.event.pubkey) as PublicKey;
        return {
            ...pubkey,
            bech32: pubkey.bech32,
            profile: async () => {
                await kv.get(["event", NostrKind.META_DATA, this.event.pubkey]);
                console.log("get profile");
                return "213"; // get profile from DB
            },
        };
    };
}

export async function EventsResolver(_, args: { pubkey: string }) {
    console.log(arguments);
    const list = kv.list<NostrEvent>({ prefix: ["event"] });
    const res = [] as EventResolver[];
    for await (const entry of list) {
        console.log(entry.value);
        if (args.pubkey == entry.value.pubkey) {
            res.push(new EventResolver(entry.value));
        }
    }
    return {
        count: res.length,
        data: async function x() {
            return res;
        },
    };
}
