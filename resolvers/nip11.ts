import { PublicKey } from "../_libs.ts";

type RelayInfomationBase = {
    name?: string;
    description?: string;
    contact?: string;
    icon?: string;
};

export type RelayInformationStringify = {
    pubkey?: string;
} & RelayInfomationBase;

export type RelayInformationParsed = {
    pubkey?: PublicKey;
} & RelayInfomationBase;

export type RelayInformation = {
    pubkey: PublicKey;
    name?: string;
    description?: string;
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
    constructor(
        private kv: Deno.Kv,
        public default_information: RelayInformation,
    ) {}

    resolveRelayInformation = async (): Promise<RelayInformation | Error> => {
        const entry = await this.kv.get<RelayInfomationBase>(["relay_information"]);
        if (!entry.value) {
            return { ...this.default_information, ...not_modifiable_information };
        }
        return { ...this.default_information, ...entry.value, ...not_modifiable_information };
    };

    set_relay_information = async (args: {
        name?: string;
        description?: string;
        contact?: string;
        icon?: string;
    }): Promise<RelayInformation | Error> => {
        const old_information = await this.resolveRelayInformation();
        if (old_information instanceof Error) {
            return old_information;
        }
        const new_information = { ...old_information, ...args };
        await this.kv.set(["relay_information"], new_information);
        return { ...this.default_information, ...new_information, ...not_modifiable_information };
    };
}

export function informationPubkeyStringify(info: RelayInformationParsed): RelayInformationStringify {
    if (!info.pubkey) {
        return info as RelayInfomationBase;
    }
    return { ...info, pubkey: info.pubkey.hex };
}
