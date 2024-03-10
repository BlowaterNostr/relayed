// deno-lint-ignore-file no-empty
import { Relay, run } from "./main.tsx";
import { assertEquals } from "https://deno.land/std@0.202.0/assert/assert_equals.ts";
import { fail } from "https://deno.land/std@0.202.0/assert/fail.ts";
import {
    InMemoryAccountContext,
    NostrEvent,
    NostrKind,
    prepareNormalNostrEvent,
    RelayRejectedEvent,
    SingleRelayConnection,
    SubscriptionStream,
} from "./_libs.ts";

Deno.test("main", async () => {
    try {
        await Deno.remove("test.sqlite");
    } catch (e) {}
    const relay = await run({
        password: "123",
        port: 8080,
        default_policy: {
            allowed_kinds: "none",
        },
        kv: await Deno.openKv("test.sqlite"),
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

    await client.close();
    await relay.shutdown();
});

Deno.test("graphql", async () => {});

async function randomEvent(ctx: InMemoryAccountContext, kind?: NostrKind, content?: string) {
    const event = await prepareNormalNostrEvent(ctx, {
        kind: kind || NostrKind.TEXT_NOTE,
        content: content || "",
    });
    return event;
}
