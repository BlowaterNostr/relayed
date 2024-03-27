# Relayed

## Local Development

To begin, install Deno by following the instructions at https://deno.land/manual/getting_started/installation.

Next, create a file named `deploy/default.ts`:

```bash
cp deploy/default.example.ts deploy/defalut.ts
```

After that, launch the project with the command:

```bash
deno task start
```

Finally, open your browser and go to `http://localhost:8000/api` to access the GraphQL playground.

### Use GraphQL Playground

To begin, click the `Re-fetch GraphQL schema` button to retrieve the schema.

In the Headers section, include `{"password":"123456"}` for identity verification.

You can now utilize the GraphQL Playground to communicate with the server.

### Client Connection

Relay url is `ws://localhost:8000`.

### Database

If you are using MacOS, the directory might be `~/Library/Caches/deno/location_data`.
