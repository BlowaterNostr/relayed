import { run } from "https://raw.githubusercontent.com/BlowaterNostr/relayed/main/main.tsx";

const relay = await run({
    port: 8080,
    default_policy: {
        allowed_kinds: "all", // or none,
    },
    default_information: {
        name: "Relayed Example",
        description: "A lightweight relay written in Deno.",
        contact: "",
        icon: "",
    },
});
if (relay instanceof Error) {
    console.error(relay);
}
