import { run } from "https://raw.githubusercontent.com/BlowaterNostr/relayed/main/main.tsx";

const relay = await run({
    port: 8000,
    default_policy: {
        allowed_kinds: "all",
    },
    auth_required: true,
});
if (relay instanceof Error) {
    console.error(relay);
}
