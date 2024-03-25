import {
    NostrEvent,
    NostrKind,
} from "https://raw.githubusercontent.com/BlowaterNostr/nostr.ts/main/nostr.ts";
import { kv } from "./index.tsx";

export class TestResolver {
    constructor(public name: string) {
        this.name = name;
    }

    // async name() {
    //     return "test"
    // }
}

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
    constructor(public event: NostrEvent) {
        console.log("cons");
        this.id = this.event.id;
        this.sig = this.event.sig;
        this.kind = this.event.kind;
    }

    pubkey = () => {
        console.log("pubkey");
        return {
            hex: this.event.pubkey,
            profile: async () => {
                await kv.get(["event", NostrKind.META_DATA, this.event.pubkey]);
                console.log("get profile");
                return "213"; // get profile from DB
            },
        };
    };
}
