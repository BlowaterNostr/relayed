import { run } from "https://raw.githubusercontent.com/bob2402/relayed/allow/main.tsx";

const relay = await run({
    port: 8080,
    default_policy: {
        allowed_kinds: "all", // or none,
    },
    default_information: {
        name: "Relayed",
        description: "A lightweight relay written in Deno",
    },
});
if (relay instanceof Error) {
    console.error(relay);
}
