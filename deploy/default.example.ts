import { run } from "../main.tsx";
import { PrivateKey } from "https://raw.githubusercontent.com/BlowaterNostr/nostr.ts/main/key.ts";

run({
  port: 8080,
  admin: PrivateKey.Generate().toPublicKey(),
  password: '123456'
})
