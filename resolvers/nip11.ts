import { PublicKey } from "../_libs.ts";

type RelayInfomationBase = {
    name?: string;
    description?: string;
    contact?: string;
    icon?: string;
}

export type RelayInformationStringify = {
    pubkey?: string;
} & RelayInfomationBase;

export type RelayInformationParsed = {
    pubkey?: PublicKey;
} & RelayInfomationBase;

export type RelayInformation = {
    name?: string;
    description?: string;
    pubkey: PublicKey;
    contact?: string;
    supported_nips?: number[];
    software?: string;
    version?: string;
    icon?: string;
};

const not_modifiable_information: {
    software: string;
    supported_nips: number[];
    version: string;
} = {
    software: "https://github.com/BlowaterNostr/relayed",
    supported_nips: [1, 2, 11],
    version: "RC5",
};

export class RelayInformationStore {
    default_information: RelayInformation;

    constructor(
        private kv: Deno.Kv,
        default_information: RelayInformation,
    ) {
        this.default_information = default_information;
    }

    resolveRelayInformation = async (): Promise<RelayInformation | Error> => {
        const store_information_i = (await this.kv.get<RelayInformationStringify>(["relay_information"])).value;
        if (!store_information_i) {
            return { ...this.default_information, ...not_modifiable_information };
        }
        const store_information = informationPubkeyParse(store_information_i);
        if (store_information instanceof Error) {
            return store_information;
        }
        return { ...this.default_information, ...store_information, ...not_modifiable_information };
    };

    set_relay_information = async (args: RelayInformationStringify): Promise<RelayInformation | Error> => {
        const old_information = await this.resolveRelayInformation();
        if (old_information instanceof Error) {
            return old_information;
        }
        const input_information = informationPubkeyParse(args);
        if (input_information instanceof Error) {
            return input_information;
        }
        const new_information = { ...old_information, ...input_information };
        const store_new_information = informationPubkeyStringify(new_information);
        await this.kv.set(["relay_information"], store_new_information);
        return { ...new_information, ...not_modifiable_information };
    };
}

export function informationPubkeyParse(info: RelayInformationStringify): RelayInformationParsed | Error {
    if (!info.pubkey) {
        return info as RelayInfomationBase;
    }
    const pubkey = PublicKey.FromString(info.pubkey);
    if (pubkey instanceof Error) {
        return pubkey;
    }
    return { ...info, pubkey };
}

export function informationPubkeyStringify(info: RelayInformationParsed): RelayInformationStringify {
    if (!info.pubkey) {
        return info as RelayInfomationBase;
    }
    return { ...info, pubkey: info.pubkey.hex };
}
