run: fmt
	deno run --check \
		--allow-net \
		--allow-read=relayed.db,relayed.db-journal,/Users/mac/Library/Caches/deno/plug \
		--allow-write=relayed.db,relayed.db-journal \
		--allow-env=DENO_DEPLOYMENT_ID,DENO_DIR,DENO_SQLITE_PATH,DENO_SQLITE_LOCAL,HOME,relayed_pubkey \
		--unstable-kv --unstable-ffi --allow-ffi \
		deploy/default.ts

fmt:
	deno fmt

test: fmt
	deno test --lock deno.test.lock \
		--trace-leaks --unstable-kv \
		--allow-read=queries,test.sqlite,relayed.db,relayed.db-journal \
		--allow-net --allow-write --allow-ffi \
		--allow-env=DENO_DEPLOYMENT_ID,DENO_DIR,HOME,relayed_pubkey \
		--coverage \
		tests/*.ts

cov:
	deno coverage coverage --html
	file_server -p 4508 coverage/html

bundle:
	deno bundle main.ts mod.ts
