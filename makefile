run: fmt
	deno run --check --allow-net --allow-env --unstable-kv deploy/default.ts

fmt:
	deno fmt

test: fmt
	deno test --allow-net --unstable-kv --allow-read --allow-write \
		--coverage test.ts
