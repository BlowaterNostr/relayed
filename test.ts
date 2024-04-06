// deno-lint-ignore-file no-empty
import { Relay, run } from "./main.tsx";
import { assertEquals } from "https://deno.land/std@0.202.0/assert/assert_equals.ts";
import { assertIsError } from "https://deno.land/std@0.202.0/assert/mod.ts";
import { fail } from "https://deno.land/std@0.202.0/assert/fail.ts";
import {
    InMemoryAccountContext,
    NostrEvent,
    NostrKind,
    prepareNormalNostrEvent,
    RelayRejectedEvent,
    RelayResponse_Event,
    SingleRelayConnection,
    SubscriptionStream,
} from "./_libs.ts";
import { not_modifiable_information } from "./resolvers/nip11.ts";

const test_kv = async () => await Deno.openKv("test.sqlite");

Deno.test("main", async (t) => {
    try {
        await Deno.remove("test.sqlite");
    } catch (e) {}
    const relay = await run({
        password: "123",
        port: 8080,
        default_policy: {
            allowed_kinds: "none",
        },
        kv: await test_kv(),
    }) as Relay;

    const policy = await relay.get_policy(NostrKind.CONTACTS);
    assertEquals(policy, {
        allow: new Set(),
        block: new Set(),
        kind: NostrKind.CONTACTS,
        read: false,
        write: false,
    });

    // relay logic
    const ctx = InMemoryAccountContext.Generate();
    const client = SingleRelayConnection.New(relay.url, { log: false });

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
        await relay.set_policy({
            kind: NostrKind.CONTACTS,
            read: true,
            write: true,
        });
        const event_1 = await randomEvent(ctx, NostrKind.CONTACTS, "1");
        const event_2 = await randomEvent(ctx, NostrKind.CONTACTS, "2");
        const event_3 = await randomEvent(ctx, NostrKind.CONTACTS, "3");

        const err_1 = await client.sendEvent(event_1);
        if (err_1 instanceof Error) fail(err_1.message);

        const err_2 = await client.sendEvent(event_2);
        if (err_2 instanceof Error) fail(err_2.message);

        const err_3 = await client.sendEvent(event_3);
        if (err_3 instanceof Error) fail(err_3.message);

        const stream = await client.newSub("get kind 3", {
            kinds: [NostrKind.CONTACTS],
        }) as SubscriptionStream;

        const events: NostrEvent[] = [];

        for await (const msg of stream.chan) {
            if (msg.type == "EVENT") {
                events.push(msg.event);
            } else if (msg.type == "EOSE") {
                await stream.chan.close();
            }
        }

        assertEquals(events.length, 3);
        // todo: assert content
    }
    {
        const ctx1 = InMemoryAccountContext.Generate();
        const event_1 = await randomEvent(ctx1, NostrKind.TEXT_NOTE, "1");

        await client.sendEvent(event_1);

        const stream = await client.newSub("get author", {
            authors: [ctx1.publicKey.hex],
        }) as SubscriptionStream;

        const msg = await stream.chan.pop() as RelayResponse_Event;
        assertEquals(msg.event, event_1);
    }

    await t.step("block pubkey", async () => {
        const ctx1 = InMemoryAccountContext.Generate();
        const event_1 = await randomEvent(ctx1, NostrKind.TEXT_NOTE, "1");

        await relay.set_policy({
            kind: event_1.kind,
            block: new Set([ctx1.publicKey.hex]),
        });

        const err = await client.sendEvent(event_1);
        assertIsError(err, Error);
    });

    await client.close();
    await relay.shutdown();
});

// https://github.com/nostr-protocol/nips/blob/master/11.md
Deno.test("NIP-11: Relay Information Document", async (t) => {
    try {
        await Deno.remove("test.sqlite");
    } catch (e) {}
    const relay = await run({
        password: "123",
        port: 8080,
        default_policy: {
            allowed_kinds: "none",
        },
        default_information: {
            name: "Nostr Relay",
        },
        kv: await test_kv(),
    }) as Relay;

    await t.step("get relay information", async () => {
        const information = await relay.get_relay_information();
        console.log(`information`, information);

        assertEquals(information, { name: "Nostr Relay", ...not_modifiable_information });
    });

    await t.step("set relay information", async () => {
        await relay.set_relay_information({
            name: "Nostr Relay2",
        });

        const information2 = await relay.get_relay_information();
        assertEquals(information2, { name: "Nostr Relay2", ...not_modifiable_information });
    });

    await t.step("graphql", async () => {
        const query = await Deno.readTextFile("./queries/getRelayInfomation.gql")
        const json = await queryGql(relay, query);
        assertEquals(json.data.relayInformation.name, "Nostr Relay2");
    });

    await relay.shutdown();
});

async function randomEvent(ctx: InMemoryAccountContext, kind?: NostrKind, content?: string) {
    const event = await prepareNormalNostrEvent(ctx, {
        kind: kind || NostrKind.TEXT_NOTE,
        content: content || "",
    });
    return event;
}

async function queryGql(relay: Relay, query: string) {
    const { hostname, port } = new URL(relay.url);
    const res = await fetch(`http://${hostname}:${port}/api`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "password": "123",
        },
        body: JSON.stringify({ query }),
    });
    return await res.json();
}
