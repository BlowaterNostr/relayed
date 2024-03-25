import {
    NostrEvent,
    NostrKind,
} from "https://raw.githubusercontent.com/BlowaterNostr/nostr.ts/main/nostr.ts";
import { kv } from "../main.tsx";

export async function Policies() {
    const list = kv.list<NostrEvent>({ prefix: ["policy"] });
    const res = [] as NostrEvent[];
    for await (const entry of list) {
        console.log(entry.value);
        res.push(entry.value);
    }
    return res;
}

export async function PolicyResolver(kind: NostrKind): Promise<Policy> {
    const entry = await kv.get<Policy>(["policy", kind]);
    if (entry.value == null) {
        return {
            kind: kind,
            read: true,
            write: true,
            allow: new Set(),
            block: new Set(),
        };
    }
    const policy = entry.value;
    console.log(policy);

    const allow = new Set<string>();
    for (const item of policy.allow) {
        if (typeof item == "string") {
            allow.add(item);
        }
    }
    policy.allow = allow;

    const block = new Set<string>();
    for (const item of policy.block) {
        if (typeof item == "string") {
            block.add(item);
        }
    }
    policy.block = block;
    policy.kind = kind;
    if (policy.read == null) {
        policy.read = true;
    }
    if (policy.write == null) {
        policy.write = true;
    }
    return policy;
}

export type Policy = {
    kind: NostrKind;
    read: boolean;
    write: boolean;
    allow: Set<string>;
    block: Set<string>;
};
