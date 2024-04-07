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
        const old_information = await this.resolveRelayInformation();
        const new_information = { ...old_information, ...args };
        await this.kv.set(["relay_information"], new_information);
        return { ...new_information, ...not_modifiable_information };
    };
}
