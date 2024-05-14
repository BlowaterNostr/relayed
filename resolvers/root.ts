import { func_GetRelayMembers, PolicyStore } from "./policy.ts";
import { Policies } from "./policy.ts";
import { RelayInformationStore } from "./nip11.ts";
import {
    Event_V1_Store,
    func_DeleteEvent,
    func_DeleteEventsFromPubkey,
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
        get_event_count: func_GetEventCount;
        delete_event: func_DeleteEvent;
        delete_events_from_pubkey: func_DeleteEventsFromPubkey;
        get_deleted_event_ids: func_GetDeletedEventIDs;
        get_relay_members: func_GetRelayMembers;
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
    get_event_count: func_GetEventCount;
    get_deleted_event_ids: func_GetDeletedEventIDs;
    get_relay_members: func_GetRelayMembers;
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
        members: async () => {
            const members = await deps.get_relay_members();
            if (members instanceof Error) {
                console.error(members);
                throw members;
            }
            if (members == undefined) {
                return [];
            }
            return members.members;
        },
    };
}

export const Mutation = (deps: {
    policyStore: PolicyStore;
    relayInformationStore: RelayInformationStore;
    delete_event: func_DeleteEvent;
    delete_events_from_pubkey: func_DeleteEventsFromPubkey;
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
        delete_events_from_pubkey: async (args: { pubkey: string }) => {
            return deps.delete_events_from_pubkey(args.pubkey);
        },
    };
};
