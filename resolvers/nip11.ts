export type RelayInformation = {
    name?: string;
    description?: string;
    pubkey?: string;
    contact?: string;
    supported_nips?: number[];
    software?: string;
    version?: string;
    icon?: string;
};

export const not_modifiable_information: {
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
        default_information?: RelayInformation,
    ) {
        this.default_information = default_information ? default_information : {};
    }

    resolveRelayInformation = async (): Promise<RelayInformation> => {
        const get_relay_information = (await this.kv.get<RelayInformation>(["relay_information"])).value;
        return { ...this.default_information, ...get_relay_information, ...not_modifiable_information };
    };

    set_relay_information = async (
        args: {
            name?: string;
            description?: string;
            pubkey?: string;
            contact?: string;
            icon?: string;
        },
    ) => {
        const information_for_modifications = await this.resolveRelayInformation();
        if (args.name != undefined) {
            information_for_modifications.name = args.name;
        }
        if (args.description != undefined) {
            information_for_modifications.description = args.description;
        }
        if (args.pubkey != undefined) {
            information_for_modifications.pubkey = args.pubkey;
        }
        if (args.contact != undefined) {
            information_for_modifications.contact = args.contact;
        }
        if (args.icon != undefined) {
            information_for_modifications.icon = args.icon;
        }
        await this.kv.set(["relay_information"], information_for_modifications);
        return { ...information_for_modifications, ...not_modifiable_information };
    };
}
