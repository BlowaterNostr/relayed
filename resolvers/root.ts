import { PolicyStore } from "./policy.ts";
import { Policies } from "./policy.ts";
import { RelayInformationStore } from "./nip11.ts";
import { EventStore, func_GetEventCount, func_GetEventsByAuthors } from "./event.ts";
import { EventReadWriter } from "../main.tsx";
import { NostrKind } from "../_libs.ts";
import { func_GetEventsByKinds } from "./event.ts";

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

export function RootResolver(deps: {
    policyStore: PolicyStore;
    relayInformationStore: RelayInformationStore;
    kv: Deno.Kv;
    get_events_by_authors: func_GetEventsByAuthors;
    get_event_count: func_GetEventCount;
    get_events_by_kinds: func_GetEventsByKinds;
}) {
    return {
        policies: Policies(deps.kv),
        relayInformation: deps.relayInformationStore.resolveRelayInformation,
        events: async (
            args: { pubkey: string[] | undefined; kind: NostrKind; offset: number; limit: number },
        ) => {
            return {
                count: async () => {
                    if (args.pubkey != undefined) {
                        const events = await Array.fromAsync(
                            deps.get_events_by_authors(new Set(args.pubkey)),
                        );
                        return events.length;
                    } else if (args.kind != undefined) {
                        const events = await Array.fromAsync(
                            deps.get_events_by_kinds(new Set([args.kind])),
                        );
                        return events.length;
                    } else {
                        return deps.get_event_count();
                    }
                },
            };
        },
        ...Mutation(deps),
    };
}
