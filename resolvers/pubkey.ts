import { PublicKey } from "https://raw.githubusercontent.com/BlowaterNostr/nostr.ts/main/key.ts";
import { EventsResolver } from "./event.ts";

export const pubkey_resolver =async (pubkey: PublicKey) => {
    return {
        ...pubkey,
        bech32: pubkey.bech32,
        events: (await EventsResolver(undefined, {pubkey: pubkey.hex})).data
    };
};
