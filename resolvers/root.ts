import { PolicyStore } from "./policy.ts";
import { Policies } from "./policy.ts";
import { RelayInformationStore } from "./nip11.ts";
import {
    Event_V1_Store,
    func_DeleteEvent,
    func_GetDeletedEventIDs,
    func_GetEventCount,
    func_GetEventsByAuthors,
} from "./event.ts";
import { NostrKind } from "../_libs.ts";
import { func_GetEventsByKinds } from "./event.ts";

export function RootResolver({ deps }: {
    deps: {
        policyStore: PolicyStore;
        relayInformationStore: RelayInformationStore;
        kv: Deno.Kv;
        get_events_by_authors: func_GetEventsByAuthors;
        get_event_count: func_GetEventCount;
        get_events_by_kinds: func_GetEventsByKinds;
        // get_channel_by_name: func_GetChannelByName;
        delete_event: func_DeleteEvent;
        get_deleted_event_ids: func_GetDeletedEventIDs;
    };
}) {
    return {
        ...Queries(deps),
        ...Mutation(deps),
    };
}

function Queries(deps: {
    policyStore: PolicyStore;
    relayInformationStore: RelayInformationStore;
    kv: Deno.Kv;
    get_events_by_authors: func_GetEventsByAuthors;
    get_event_count: func_GetEventCount;
    get_events_by_kinds: func_GetEventsByKinds;
    // get_channel_by_name: func_GetChannelByName;
    get_deleted_event_ids: func_GetDeletedEventIDs;
}) {
    return {
        policies: Policies(deps.kv),
        relayInformation: deps.relayInformationStore.resolveRelayInformation,
        events: async (
            args: { pubkey: string[] | undefined; kind: NostrKind; offset: number; limit: number },
        ) => {
            return {
                count_total: async () => {
                    return Array.from(await deps.get_event_count()).reduce((pre, cur) => {
                        return pre + cur[1];
                    }, 0);
                },
                count_per_kind: async () => {
                    return Array.from(await deps.get_event_count()).map((r) => {
                        return {
                            kind: r[0],
                            count: r[1],
                        };
                    });
                },
            };
        },
        channel: (args: { name: string }) => {
            // const channel = deps.get_channel_by_name(args.name);
        },
        deleted_events: async () => {
            return deps.get_deleted_event_ids();
        },
    };
}

export const Mutation = (deps: {
    policyStore: PolicyStore;
    relayInformationStore: RelayInformationStore;
    delete_event: func_DeleteEvent;
    kv: Deno.Kv;
}) => {
    const { policyStore, relayInformationStore, kv } = deps;
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
        delete_event: async (args: { id: string }) => {
            const ok = await deps.delete_event(args.id);
            console.log("|||", ok);
        },
    };
};
