run: fmt
	deno run --check \
		--allow-net --allow-env \
		--allow-read=relayed.db,relayed.db-journal \
		--allow-write=relayed.db,relayed.db-journal \
		--unstable-kv \
		deploy/default.ts

fmt:
	deno fmt

test: fmt
	deno test --unstable-kv \
		--allow-net --allow-read --allow-write \
		--allow-env=DENO_DEPLOYMENT_ID \
		--coverage \
		# --filter $(filter) \
		test.ts

cov:
	deno coverage coverage --html
	file_server -p 4508 coverage/html
