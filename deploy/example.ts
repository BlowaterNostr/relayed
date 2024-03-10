import { run } from "../main.tsx";

const relay = await run({
    port: 8080,
    default_policy: {
        allowed_kinds: "all", // or none,
    },
    password: Deno.env.get("relayed_pw"),
});
if (relay instanceof Error) {
    console.error(relay);
}
