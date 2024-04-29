import { PublicKey } from "../_libs.ts";
import { run } from "../main.tsx";

const relayed_pubkey = Deno.env.get("relayed_pubkey");
if (!relayed_pubkey) {
    console.error("Please set the environment variable 'relayed_pubkey'");
    Deno.exit(1);
}

const pubkey = PublicKey.FromString(relayed_pubkey);
if (pubkey instanceof Error) {
    console.error(pubkey);
    Deno.exit(1);
}

const relay = await run({
    port: 8080,
    default_policy: {
        allowed_kinds: "all", // or none,
    },
    default_information: {
        name: "Relayed Example",
        description: "A lightweight relay written in Deno.",
        pubkey,
        contact: "",
        icon: "",
    },
});
if (relay instanceof Error) {
    console.error(relay);
}
