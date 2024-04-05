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

export const Information = (kv: Deno.Kv) =>
    async function () {
        const res = await kv.get<RelayInformation>(["relay_information"]);
        if (res.value == null) return null;
        return res.value;
    };

export class RelayInformationStore {
    information: RelayInformation = {
        software: "https://github.com/BlowaterNostr/relayed",
        supported_nips: [1, 2],
        version: "RC5",
    };

    constructor(
        default_information: RelayInformation,
        private kv: Deno.Kv,
        initial_information: RelayInformation | null,
    ) {
        if (initial_information == null) {
            this.information = {
                ...this.information,
                ...default_information,
            };
        } else {
            this.information = {
                ...this.information,
                ...initial_information,
            };
        }
    }

    resolveRelayInformation = async (): Promise<RelayInformation> => {
        return this.information;
    };

    set_relay_information = async (
        args: {
            name?: string;
            description?: string;
            pubkey?: string;
            contact?: string;
            supported_nips?: number[];
            software?: string;
            version?: string;
            icon?: string;
        } | RelayInformation,
    ) => {
        const information = this.information;
        if (args.name != undefined) {
            information.name = args.name;
        }
        if (args.description != undefined) {
            information.description = args.description;
        }
        if (args.pubkey != undefined) {
            information.pubkey = args.pubkey;
        }
        if (args.contact != undefined) {
            information.contact = args.contact;
        }
        if (args.supported_nips != undefined) {
            information.supported_nips = args.supported_nips;
        }
        if (args.software != undefined) {
            information.software = args.software;
        }
        if (args.version != undefined) {
            information.version = args.version;
        }
        if (args.icon != undefined) {
            information.icon = args.icon;
        }
        await this.kv.set(["relay_information"], information);
        return information;
    };
}
