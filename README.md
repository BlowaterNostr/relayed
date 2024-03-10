# Relayed
[![deno module](https://shield.deno.dev/x/relayed)](https://deno.land/x/relayed)

> [!IMPORTANT]
> Make Small Relay Great for the first time!

Relayed is lightweight relay written in Deno.

- built-in database
- GraphQL API for relay management

## Quick Start

1. Install Deno at https://deno.land/manual/getting_started/installation.

2. Run following command in your CLI:
```bash
# relayed_pw is the password for the relayed admin
relayed_pw=123whatever deno run -r --allow-net --allow-env --unstable https://deno.land/x/relayed/deploy/example.ts
```

3. You have a relay!

## Local Development

To begin, install Deno by following the instructions at https://deno.land/manual/getting_started/installation.

Next, create a file named `deploy/default.ts`:

```bash
cp deploy/example.ts deploy/defalut.ts
```

After that, launch the project with the command:

```bash
relayed_pw=123whatever deno task start
```

Finally, open your browser and go to http://localhost:8080/api to access the GraphQL playground.

### Use GraphQL Playground

In the Headers section, include `{"password":"123whatever"}` for identity verification.

Click the `Re-fetch GraphQL schema` button to retrieve the schema.

You can now utilize the GraphQL Playground to communicate with the server.

### Client Connection

Relay url is `ws://localhost:8000`.

### Database

If you are using MacOS, the directory might be `~/Library/Caches/deno/location_data`.
