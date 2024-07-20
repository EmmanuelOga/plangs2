import type { VNode } from "preact";
import render from "preact-render-to-string";
import { Home } from "./app";

function html(component: VNode) {
  return new Response(render(component), { headers: { "Content-Type": "text/html" } });
}

async function resolveStatic(path: string): Promise<Response | undefined> {
    const staticPath = Bun.fileURLToPath(`file:///${__dirname}/../static/${path}`);
    const file = Bun.file(staticPath);
    if (await file.exists()) return new Response(file);
}

const server = Bun.serve({
  async fetch(req) {
    const path = new URL(req.url).pathname;

    if (path === "/") return html(Home());

    const rsp = await resolveStatic(path.slice(1));
    if (rsp) return rsp;

    return new Response("Page not found", { status: 404 });
  },
});

console.log(`Listening on ${server.url}`);
