import { PublicKey } from "../_libs.ts";

export type RelayInformationSave = {
    name?: string;
    description?: string;
    pubkey?: string;
    contact?: string;
    icon?: string;
}

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
        const store_information_i = (await this.kv.get<RelayInformationSave>(["relay_information"])).value;
        if(!store_information_i) {
            return { ...this.default_information, ...not_modifiable_information };
        }
        if (!store_information_i.pubkey) {
            return { ...this.default_information, ...{ name: store_information_i.name, contact: store_information_i.contact, description: store_information_i.description, icon: store_information_i.icon }, ...not_modifiable_information };
        }
        const get_relay_information_pubkey = PublicKey.FromString(store_information_i.pubkey);
        if (get_relay_information_pubkey instanceof Error) {
            return get_relay_information_pubkey
        }
        const store_infomation = {
            ...store_information_i,
            pubkey: get_relay_information_pubkey,
        }
        return { ...this.default_information, ...store_infomation, ...not_modifiable_information };
    };

    set_relay_information = async (args: RelayInformationSave) => {
        const old_information = await this.resolveRelayInformation();
        if (old_information instanceof Error) {
            return old_information;
        }
        const new_information = {...old_information, ...args};
        if (new_information.pubkey instanceof PublicKey) {
            new_information.pubkey = new_information.pubkey.hex
        }
        await this.kv.set(["relay_information"], new_information);
        return { ...new_information, ...not_modifiable_information };
    };
}
