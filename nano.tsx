import * as nano from "https://deno.land/x/nano_jsx@v0.1.0/mod.ts"

const port = 8080;

const handler = (request: Request): Response => {

    const App = () => <div>12345</div>
    const body = nano.renderSSR(<App></App>)
    console.log("body", body)
    const res = new Response(body, { status: 200 });
    res.headers.set("content-type", "text/html")
  return res;
};

console.log(`HTTP server running. Access it at: http://localhost:8080/`);
Deno.serve({ port }, handler);
