// deno-lint-ignore-file no-empty
import { ENV_relayed_pubkey, Relay, run, software, supported_nips } from "../main.ts";
import {
    assertEquals,
    assertIsError,
    assertNotInstanceOf,
} from "https://deno.land/std@0.224.0/assert/mod.ts";
import { fail } from "https://deno.land/std@0.224.0/assert/fail.ts";

import * as client_test from "../nostr.ts/relay-single-test.ts";
import {
    ChannelCreation,
    ChannelEdition,
    InMemoryAccountContext,
    Kind_V2,
    NostrKind,
    RelayResponse_Event,
    Signer,
} from "../nostr.ts/nostr.ts";
import { prepareNormalNostrEvent } from "../nostr.ts/event.ts";
import { RelayRejectedEvent, SingleRelayConnection, SubscriptionStream } from "../nostr.ts/relay-single.ts";
import { PrivateKey } from "../nostr.ts/key.ts";
import { sleep } from "https://raw.githubusercontent.com/BlowaterNostr/csp/master/csp.ts";
import { RFC3339 } from "../nostr.ts/_helper.ts";
import { format } from "https://deno.land/std@0.224.0/datetime/format.ts";
import { prepareSpaceMember } from "../nostr.ts/space-member.ts";

const test_kv = async () => {
    try {
        await Deno.remove("test.sqlite");
    } catch (e) {}
    return await Deno.openKv("test.sqlite");
};

const test_ctx = InMemoryAccountContext.Generate();
const test_auth_event = async () => {
    const event = await prepareNormalNostrEvent(test_ctx, {
        kind: NostrKind.TEXT_NOTE,
        content: "",
    });
    return btoa(JSON.stringify(event));
};

Deno.test({
    name: "main",
    // ignore: true,
    fn: async (t) => {
        const relay = await run({
            auth_required: false,
            admin: test_ctx.publicKey,
            default_policy: {
                allowed_kinds: [NostrKind.Long_Form, NostrKind.Encrypted_Custom_App_Data],
            },
            // system_key: PrivateKey.Generate(),
            kv: await test_kv(),
        }) as Relay;

        const policy = await relay.get_policy(NostrKind.CONTACTS);
        assertEquals(policy, {
            allow: new Set<string>(),
            block: new Set<string>(),
            kind: NostrKind.CONTACTS,
            read: false,
            write: false,
        });

        // relay logic
        const ctx = InMemoryAccountContext.Generate();
        const client = SingleRelayConnection.New(relay.ws_url, { log: false });

        {
            // because default policy allows no kinds
            const err = await client.sendEvent(await randomEvent(ctx));
            assertEquals(err instanceof RelayRejectedEvent, true);
        }
        {
            await relay.set_policy({
                kind: NostrKind.TEXT_NOTE,
                read: false,
                write: true,
            });
            const event_sent = await randomEvent(ctx);
            const err = await client.sendEvent(event_sent);
            if (err instanceof Error) fail(err.message);

            const event_got = await client.getEvent(event_sent.id);
            assertEquals(event_got, undefined);

            await relay.set_policy({ kind: NostrKind.TEXT_NOTE, read: true });
            const event_got_2 = await client.getEvent(event_sent.id);
            assertEquals(event_got_2, event_sent);
        }
        {
            const ctx1 = InMemoryAccountContext.Generate();
            const event_1 = await randomEvent(ctx1, NostrKind.TEXT_NOTE, "test:main 1");

            await client.sendEvent(event_1);

            const stream = await client.newSub("get author", {
                authors: [ctx1.publicKey.hex],
            }) as SubscriptionStream;

            const msg = await stream.chan.pop() as RelayResponse_Event;
            assertEquals(msg.event, event_1);
        }

        await t.step("block pubkey", async () => {
            const ctx1 = InMemoryAccountContext.Generate();
            const event_1 = await randomEvent(ctx1, NostrKind.TEXT_NOTE, "test:block pubkey 1");

            const policy = await relay.set_policy({
                kind: event_1.kind,
                block: new Set([ctx1.publicKey.hex]),
            });
            if (policy instanceof Error) fail(policy.message);

            const err = await client.sendEvent(event_1);
            assertIsError(err, Error);
        });

        await t.step("client_test", async () => {
            await client_test.limit(relay.ws_url)();
            await client_test.no_event(relay.ws_url)();
            await client_test.newSub_multiple_filters(relay.ws_url)();
            await client_test.two_clients_communicate(relay.ws_url)();
            await client_test.get_event_by_id(relay.ws_url)();
            await client_test.close_sub_keep_reading(relay.ws_url)();
            await client_test.get_correct_kind(relay.ws_url)();
        });

        await client.close();
        await relay.shutdown();
    },
});

Deno.test({
    name: "allow write:false event",
    // ignore: true,
    fn: async () => {
        await using relay = await run({
            auth_required: false,
            admin: test_ctx.publicKey,
            default_policy: {
                allowed_kinds: "none",
            },
            kv: await test_kv(),
        }) as Relay;
        const client = SingleRelayConnection.New(relay.ws_url);
        {
            const ctx1 = InMemoryAccountContext.Generate();
            const ctx2 = InMemoryAccountContext.Generate();
            const err = await relay.set_policy({
                kind: 1,
                allow: new Set([ctx1.publicKey.bech32(), ctx2.publicKey.hex]),
            });
            if (err instanceof Error) fail(err.message);

            const event1 = await prepareNormalNostrEvent(ctx1, {
                kind: 1,
                content: "1",
            });
            const err1 = await client.sendEvent(event1);
            if (err1 instanceof Error) fail(err1.message);

            const event2 = await prepareNormalNostrEvent(ctx2, {
                kind: 1,
                content: "2",
            });
            const err2 = await client.sendEvent(event2);
            if (err2 instanceof Error) fail(err2.message);

            const event_1 = await relay.get_event(event1.id);
            assertEquals(event_1, event1);
            const event_2 = await relay.get_event(event2.id);
            assertEquals(event_2, event2);
        }
        await client.close();
    },
});

Deno.test({
    name: "channel",
    // ignore: true,
    fn: async () => {
        const relay = await run({
            auth_required: false,
            admin: test_ctx.publicKey,
            default_policy: {
                allowed_kinds: "none",
            },
            kv: await test_kv(),
            // system_key: PrivateKey.Generate(),
        });
        if (relay instanceof Error) {
            console.error(relay);
            fail(relay.message);
        }

        {
            const ctx = InMemoryAccountContext.Generate();
            const ChannelCreation_event: ChannelCreation = await ctx.signEventV2({
                pubkey: ctx.publicKey.hex,
                kind: Kind_V2.ChannelCreation,
                name: "test",
                scope: "server",
                created_at: format(new Date(), RFC3339),
            });
            const r = await fetch(`${relay.http_url}`, {
                method: "POST",
                body: JSON.stringify(ChannelCreation_event),
            });
            await r.text();
            assertEquals(r.status, 200);

            // get the channel
            const chan = await relay.get_channel_by_id(ChannelCreation_event.id);
            assertEquals(chan, {
                create: ChannelCreation_event as ChannelCreation,
                edit: undefined,
            });

            // edit the channel
            const event_edit = await ctx.signEventV2({
                pubkey: ctx.publicKey.hex,
                kind: Kind_V2.ChannelEdition,
                channel_id: ChannelCreation_event.id,
                name: "test2",
                scope: "server",
                created_at: format(new Date(), RFC3339),
            });
            const r2 = await fetch(`${relay.http_url}`, {
                method: "POST",
                body: JSON.stringify(event_edit),
            });

            assertEquals(r2.status, 200, await r2.text());

            // get the channel
            const chan2 = await relay.get_channel_by_id(ChannelCreation_event.id);
            assertEquals(chan2, {
                create: ChannelCreation_event as ChannelCreation,
                edit: event_edit as ChannelEdition,
            });
        }
        await relay.shutdown();
    },
});

// https://github.com/nostr-protocol/nips/blob/master/01.md#kinds
// https://github.com/nostr-protocol/nips/blob/master/11.md
Deno.test({
    name: "NIP-11: Relay Information Document",
    // ignore: true,
    fn: async (t) => {
        await t.step("get relay information", async (t) => {
            await t.step("admin from the argument", async () => {
                await using relay = await run({
                    default_policy: {
                        allowed_kinds: "none",
                    },
                    default_information: {
                        name: "Nostr Relay",
                    },
                    auth_required: false,
                    admin: test_ctx.publicKey,
                    kv: await test_kv(),
                }) as Relay;
                const information = await relay.get_relay_information();
                assertEquals(information, {
                    name: "Nostr Relay",
                    pubkey: test_ctx.publicKey,
                    software,
                    supported_nips,
                });
            });
            await t.step("admin from the env var", async () => {
                const key = PrivateKey.Generate();
                Deno.env.set(ENV_relayed_pubkey, key.toPublicKey().hex);
                await using relay = await run({
                    default_policy: {
                        allowed_kinds: "none",
                    },
                    default_information: {
                        name: "Nostr Relay",
                    },
                    auth_required: false,
                    kv: await test_kv(),
                }) as Relay;
                const information = await relay.get_relay_information();
                assertEquals(information, {
                    name: "Nostr Relay",
                    pubkey: key.toPublicKey(),
                    software,
                    supported_nips,
                });
            });
        });

        await using relay = await run({
            default_policy: {
                allowed_kinds: "none",
            },
            default_information: {
                name: "Nostr Relay",
            },
            auth_required: false,
            admin: test_ctx.publicKey,
            kv: await test_kv(),
            // system_key: PrivateKey.Generate(),
        }) as Relay;

        await t.step("set relay information", async () => {
            await relay.set_relay_information({
                name: "Nostr Relay2",
            });

            const information2 = await relay.get_relay_information();
            assertEquals(information2, {
                name: "Nostr Relay2",
                // @ts-ignore
                pubkey: {
                    hex: test_ctx.publicKey.hex,
                },
                software,
                supported_nips,
            });
        });

        await t.step("graphql get relay information", async () => {
            const query = await Deno.readTextFile("./queries/getRelayInformation.gql");
            const json = await queryGql(relay, query);
            assertEquals(json.data.relayInformation, {
                name: "Nostr Relay2",
                icon: null,
                contact: null,
                description: null,
                version: null,
                pubkey: {
                    hex: test_ctx.publicKey.hex,
                },
                software,
                supported_nips,
            });
        });

        await t.step("graphql set relay information", async () => {
            const variables = {
                name: "Nostr Relay3",
            };
            const query = await Deno.readTextFile("./queries/setRelayInformation.gql");
            const json = await queryGql(relay, query, variables);
            assertEquals(json.data.set_relay_information, {
                name: "Nostr Relay3",
                icon: null,
                contact: null,
                description: null,
                version: null,
                pubkey: {
                    hex: test_ctx.publicKey.hex,
                },
                software,
                supported_nips,
            });
        });
    },
});

Deno.test({
    name: "Authorization",
    // ignore: true,
    fn: async (t) => {
        const ctx = InMemoryAccountContext.Generate();
        const relay = await run({
            admin: ctx.publicKey.hex,
            kv: await test_kv(),
            default_policy: {
                allowed_kinds: "all",
            },
            auth_required: true,
        });
        if (relay instanceof Error) fail(relay.message);

        await t.step("admin is always allowed", async () => {
            const client = SingleRelayConnection.New(relay.ws_url, {
                signer: ctx,
            });
            const err = await client.newSub("", {});
            assertNotInstanceOf(err, Error);
            await client.close();
        });

        await t.step("a member is allowed", async () => {
            const user = InMemoryAccountContext.Generate();
            const spaceMemberEvennt = await prepareSpaceMember(ctx, user.publicKey.hex);
            if (spaceMemberEvennt instanceof Error) fail(spaceMemberEvennt.message);
            await relay.add_space_member(spaceMemberEvennt);
            const client = SingleRelayConnection.New(relay.ws_url, {
                signer: user,
            });
            await sleep(10);
            const err = await client.newSub("", {});
            if (err instanceof Error) fail(err.message);
            await client.close();
        });

        await t.step("stranger is blocked", async () => {
            const client = SingleRelayConnection.New(relay.ws_url, {
                signer: InMemoryAccountContext.Generate(),
            });
            await sleep(30);
            const err = await client.newSub("", {});
            assertIsError(err, Error);
            await client.close();
        });
        await relay.shutdown();
    },
});

async function randomEvent(ctx: InMemoryAccountContext, kind?: NostrKind, content?: string) {
    const event = await prepareNormalNostrEvent(ctx, {
        kind: kind || NostrKind.TEXT_NOTE,
        content: content || "",
    });
    return event;
}

async function queryGql(relay: Relay, query: string, variables?: object) {
    const { hostname, port } = new URL(relay.ws_url);
    const token = await test_auth_event();
    const res = await fetch(`http://${hostname}:${port}/api`, {
        method: "POST",
        headers: {
            "Cookie": `token=${token};`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query, variables }),
    });
    return await res.json();
}
