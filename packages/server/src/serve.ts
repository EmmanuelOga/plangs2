import { join, extname } from "node:path";

import { PlangsGraph } from "@plangs/plangs";
import { loadAllDefinitions } from "@plangs/definitions";

// biome-ignore lint/style/useNodejsImportProtocol: not needed with Bun.
import { watch } from "fs";

import { html, packagesPath } from "./util";
import { resolvePage } from "./page";

const pg = new PlangsGraph();
loadAllDefinitions(pg);

const server = Bun.serve({
  async fetch(req) {
    const path = new URL(req.url).pathname;

    if (path === "/plangs.json") {
      return new Response(JSON.stringify(pg), { headers: { "Content-Type": "application/json" } });
    }

    if (path === "/sse") return sse(req);

    if (path.startsWith("/images")) {
      const img = Bun.file(packagesPath("definitions/src/definitions", path.slice(8)));
      if (await img.exists()) return new Response(img, { headers: { "Content-Type": `image/${extname(path)}` } });
      return new Response(null, { status: 404 });
    }

    const page = await resolvePage(path, pg);
    if (page) return html(page);

    const file = Bun.file(packagesPath("server/static", path.slice(1)));
    if (await file.exists()) return new Response(file);

    console.warn(`404 for ${path}`);
    return new Response(`Page not found: ${JSON.stringify(path)}`, { status: 404 });
  },
});

console.log(`Listening on ${server.url}`);

const ROOT = join(import.meta.dir, "../../.."); // Root of the git repo.

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
