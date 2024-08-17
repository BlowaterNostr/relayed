import { func_GetSpaceMembers, PolicyStore } from "./policy.ts";
import { Policies } from "./policy.ts";
import { RelayInformationStore } from "./nip11.ts";
import { func_GetEventCount } from "./event.ts";
import { func_DeleteEvent, func_DeleteEventsFromPubkey, func_GetDeletedEventIDs } from "./event_deletion.ts";
import { NostrKind } from "@blowater/nostr-sdk";

export function RootResolver({ deps }: {
    deps: {
        policyStore: PolicyStore;
        relayInformationStore: RelayInformationStore;
        get_event_count: func_GetEventCount;
        delete_event: func_DeleteEvent;
        delete_events_from_pubkey: func_DeleteEventsFromPubkey;
        get_deleted_event_ids: func_GetDeletedEventIDs;
        kv: Deno.Kv;
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
    get_event_count: func_GetEventCount;
    get_deleted_event_ids: func_GetDeletedEventIDs;
    kv: Deno.Kv;
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
    delete_events_from_pubkey: func_DeleteEventsFromPubkey;
}) => {
    const { policyStore, relayInformationStore } = deps;
    return {
        add_block: async (args: { kind: number; pubkey: string }) => {
            const policy = await policyStore.resolvePolicyByKind(args.kind);
            if (policy instanceof Error) {
                return policy;
            }
            policy.block.add(args.pubkey);
            await policyStore.set_policy(policy);
            return policy;
        },
        remove_block: async (args: { kind: number; pubkey: string }) => {
            const policy = await policyStore.resolvePolicyByKind(args.kind);
            if (policy instanceof Error) {
                return policy;
            }
            policy.block.delete(args.pubkey);
            await policyStore.set_policy(policy);
            return policy;
        },
        add_allow: async (args: { kind: number; pubkey: string }) => {
            const policy = await policyStore.resolvePolicyByKind(args.kind);
            if (policy instanceof Error) {
                return policy;
            }
            policy.allow.add(args.pubkey);
            await policyStore.set_policy(policy);
            return policy;
        },
        remove_allow: async (args: { kind: number; pubkey: string }) => {
            const policy = await policyStore.resolvePolicyByKind(args.kind);
            if (policy instanceof Error) {
                return policy;
            }
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
        delete_events_from_pubkey: async (args: { pubkey: string }) => {
            return deps.delete_events_from_pubkey(args.pubkey);
        },
    };
};
