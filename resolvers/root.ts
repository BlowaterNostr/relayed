import { PolicyStore } from "./policy.ts";
import { Policies } from "./policy.ts";
import { Information } from "./relay.ts";
import { RelayInformationStore } from "./relay.ts";

export const Mutation = (args: {
    policyStore: PolicyStore;
    relayInformationStore: RelayInformationStore;
    kv: Deno.Kv;
}) => {
    const { policyStore, relayInformationStore, kv } = args;
    return {
        add_block: async (args: { kind: number; pubkey: string }) => {
            const policy = await policyStore.resolvePolicyByKind(args.kind);
            policy.block.add(args.pubkey);
            await policyStore.set_policy(policy);
            return policy;
        },
        remove_block: async (args: { kind: number; pubkey: string }) => {
            const policy = await policyStore.resolvePolicyByKind(args.kind);
            policy.block.delete(args.pubkey);
            await policyStore.set_policy(policy);
            return policy;
        },
        add_allow: async (args: { kind: number; pubkey: string }) => {
            const policy = await policyStore.resolvePolicyByKind(args.kind);
            policy.allow.add(args.pubkey);
            await policyStore.set_policy(policy);
            return policy;
        },
        remove_allow: async (args: { kind: number; pubkey: string }) => {
            const policy = await policyStore.resolvePolicyByKind(args.kind);
            policy.allow.delete(args.pubkey);
            await policyStore.set_policy(policy);
            return policy;
        },
        set_policy: policyStore.set_policy,
        set_relay_information: relayInformationStore.set_relay_information,
    };
};

export function RootResolver(args: {
    policyStore: PolicyStore;
    relayInformationStore: RelayInformationStore;
    kv: Deno.Kv;
}) {
    return {
        policies: Policies(args.kv),
        relayInformation: Information(args.kv),
        ...Mutation(args),
    };
}
