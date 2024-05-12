import { run } from "https://raw.githubusercontent.com/BlowaterNostr/relayed/main/main.tsx";

const relay = await run({
    port: 8000,
    default_policy: {
        allowed_kinds: "all",
    },
    default_information: {
        auth_required: false,
    },
});
if (relay instanceof Error) {
    console.error(relay);
}
