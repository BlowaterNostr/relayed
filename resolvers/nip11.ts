import { PublicKey } from "@blowater/nostr-sdk";
import { software, supported_nips } from "../main.ts";

export type RelayInfomationBase = {
    name?: string;
    description?: string;
    contact?: string;
    icon?: string;
};

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

export class RelayInformationStore {
    constructor(
        private kv: Deno.Kv,
        public default_information: RelayInformation,
    ) {}

    resolveRelayInformation = async (): Promise<RelayInformation | Error> => {
        const entry = await this.kv.get<RelayInfomationBase>(["relay_information"]);
        if (!entry.value) {
            return {
                ...this.default_information,
                software,
                supported_nips,
            };
        }
        return { ...this.default_information, ...entry.value, software, supported_nips };
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
        return { ...this.default_information, ...new_information, software, supported_nips };
    };
}
