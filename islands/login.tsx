import { RouteContext } from "$fresh/server.ts";

export default function Login() {
    console.log(globalThis.document.cookie);
    return <div>Login</div>;
}
