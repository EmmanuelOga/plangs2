import type { VNode } from "preact";
import render from "preact-render-to-string/jsx";
import { PlangsGraph } from "packages/plangs/src/graph";

// biome-ignore lint/style/useNodejsImportProtocol: not needed with Bun.
import { watch } from "fs";
import { Page } from "./page";

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
    console.log(`Request for ${path}`);

    if (path === "/sse") return sse(req);

    if (path === "/") return html(Page({ pageId: "home", pg }));
    if (path === "/about") return html(Page({ pageId: "about", pg }));
    if (path === "/blog") return html(Page({ pageId: "blog", pg }));
    if (path === "/lang") return html(Page({ pageId: "lang", pg }));
    if (path === "/universe") return html(Page({ pageId: "universe", pg }));

    const rsp = await resolveStatic(path.slice(1));
    if (rsp) return rsp;

    return new Response("Page not found.", { status: 404 });
  },
});

console.log(`Listening on ${server.url}`);

const ROOT = Bun.fileURLToPath(`file:///${__dirname}/../../..`);

/** Respond to SSE connections to /sse by sending file changed events. */
function sse(req: Request) {
  const { signal } = req;
  return new Response(
    new ReadableStream({
      start(controller) {
        const watcher = watch(ROOT, { recursive: true }, (event, filename) => {
          controller.enqueue(`data: ${JSON.stringify({ event, filename })}\n\n`);
        });
        signal.onabort = () => {
          watcher.close();
          controller.close();
        };
      },
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    },
  );
}
