import type { VNode } from "preact";
import render from "preact-render-to-string/jsx";
import { HomePage } from "./app";
import { PlangsGraph } from "packages/plangs/src/graph";

function html(component: VNode) {
  const page = `<!DOCTYPE html>\n${render(component, {}, { pretty: true })}`;
  return new Response(page, { headers: { "Content-Type": "text/html" } });
}

function staticPath(path: string): string {
  return Bun.fileURLToPath(`file:///${__dirname}/../static/${path}`);
}

async function resolveStatic(path: string): Promise<Response | undefined> {
  const file = Bun.file(staticPath(path));
  if (await file.exists()) return new Response(file);
}

const pg = new PlangsGraph().loadJSON(await Bun.file(staticPath("plangs.json")).json());

const server = Bun.serve({
  async fetch(req) {
    const path = new URL(req.url).pathname;

    if (path === "/") return html(HomePage({ pg }));

    const rsp = await resolveStatic(path.slice(1));
    if (rsp) return rsp;

    return new Response("Page not found.", { status: 404 });
  },
});

console.log(`Listening on ${server.url}`);
