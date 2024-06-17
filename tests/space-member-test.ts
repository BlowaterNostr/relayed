import { Relay, run } from "../main.ts";
import { InMemoryAccountContext } from "../nostr.ts/nostr.ts";
import { fail } from "https://deno.land/std@0.224.0/assert/fail.ts";
import { assertEquals } from "https://deno.land/std@0.220.1/assert/assert_equals.ts";
import { prepareSpaceMember } from "../nostr.ts/space-member.ts";

const test_ctx = InMemoryAccountContext.Generate();
const test_kv = async () => {
    try {
        await Deno.remove("test.sqlite");
    } catch (e) {}
    return await Deno.openKv("test.sqlite");
};

Deno.test("Space Member", async (t) => {
    const relay = await run({
        auth_required: false,
        admin: test_ctx.publicKey,
        default_policy: {
            allowed_kinds: "none",
        },
        kv: await test_kv(),
    }) as Relay;
    const new_member = InMemoryAccountContext.Generate();

    await t.step("add member", async () => {
        const add_member_event = await prepareSpaceMember(test_ctx, new_member.publicKey.hex);
        if (add_member_event instanceof Error) fail(add_member_event.message);
        const r = await fetch(`${relay.http_url}`, {
            method: "POST",
            body: JSON.stringify(add_member_event),
        });
        await r.text();
        assertEquals(r.status, 200);
        const space_members = await relay.get_space_members();
        if (space_members instanceof Error) fail(space_members.message);
        assertEquals(space_members.map((event) => event.id).includes(add_member_event.id), true);
    });

    await t.step("it it already a member", async () => {
        const redo = await prepareSpaceMember(test_ctx, new_member.publicKey.hex);
        if (redo instanceof Error) fail(redo.message);
        const r = await fetch(`${relay.http_url}`, {
            method: "POST",
            body: JSON.stringify(redo),
        });
        const message = await r.text();
        assertEquals(r.status, 400);
        assertEquals(message, `${new_member.publicKey.hex} is already a member of the space.`);
    });

    await t.step("admin is member", async () => {
        const res = await relay.is_space_member(test_ctx.publicKey.hex);
        if (res instanceof Error) fail(res.message);
        assertEquals(res, true);
    });

    await t.step("new member is member", async () => {
        const res = await relay.is_space_member(new_member.publicKey.hex);
        if (res instanceof Error) fail(res.message);
        assertEquals(res, true);
    });

    await t.step("stranger is not member", async () => {
        const res = await relay.is_space_member(InMemoryAccountContext.Generate().publicKey.hex);
        if (res instanceof Error) fail(res.message);
        assertEquals(res, false);
    });

    await relay.shutdown();
});
