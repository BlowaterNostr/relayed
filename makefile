run: fmt
	deno task run

fmt:
	deno fmt

test: fmt
	deno test --allow-net --unstable --allow-read --allow-write \
		--filter main \
		--coverage test.ts
