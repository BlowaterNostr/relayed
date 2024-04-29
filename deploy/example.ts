import { run } from "../main.tsx";

const relay = await run({
    port: 8080,
    default_policy: {
        allowed_kinds: "all", // or none,
    },
    default_information: {
        name: "Relayed Example",
        description: "A lightweight relay written in Deno.",
        pubkey: "public key",
        contact: "",
        icon: "",
    },
});
if (relay instanceof Error) {
    console.error(relay);
}
