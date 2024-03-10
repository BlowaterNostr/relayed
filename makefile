run: fmt
	deno task run

fmt:
	deno fmt

test: fmt
	deno task test
