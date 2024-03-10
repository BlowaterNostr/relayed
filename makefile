run: fmt
	deno run --check --allow-net --allow-env --unstable deploy/default.ts

fmt:
	deno fmt

test: fmt
	deno test --allow-net --unstable --allow-read --allow-write \
		--coverage test.ts
