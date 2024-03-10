import { PublicKey } from "../_libs.ts";

export const pubkey_resolver = async (pubkey: PublicKey) => {
    return {
        ...pubkey,
        bech32: pubkey.bech32,
    };
};
