import { assertEquals } from "https://deno.land/std@0.224.0/assert/assert_equals.ts";
import { fail } from "https://deno.land/std@0.224.0/assert/fail.ts";
import { format } from "@std/datetime";
import { RFC3339 } from "https://jsr.io/@blowater/nostr-sdk/0.0.12/_helper.ts";
import { InMemoryAccountContext } from "@blowater/nostr-sdk";
import { ChannelCreation, ChannelEdition, Kind_V2 } from "https://jsr.io/@blowater/nostr-sdk/0.0.12/v2.ts";
import { run } from "../main.ts";

const test_ctx = InMemoryAccountContext.Generate();
const test_kv = async () => {
    try {
        await Deno.remove("test.sqlite");
    } catch (e) {}
    return await Deno.openKv("test.sqlite");
};

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
