import {
    close_sub_keep_reading,
    newSub_close,
    open_close,
    send_event,
    sub_before_socket_open,
    sub_exits,
} from "https://raw.githubusercontent.com/BlowaterNostr/nostr.ts/main/relay-single-test.ts";

Deno.test("localhost", async () => {
    const localhost = "ws://localhost:8080";
    await open_close([localhost])();
    await newSub_close(localhost)();
    await sub_exits(localhost)();
    await close_sub_keep_reading(localhost)();
    await send_event(localhost)();
    await sub_before_socket_open(localhost)();
});
