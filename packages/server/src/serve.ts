import { PlangsGraph } from "@plangs/plangs";

// biome-ignore lint/style/useNodejsImportProtocol: not needed with Bun.
import { watch } from "fs";

import { html, localPath } from "./util";
import { resolvePage } from "./page";

async function resolveStatic(path: string): Promise<Response | undefined> {
  const file = Bun.file(localPath(`static/${path}`));
  if (await file.exists()) return new Response(file);
}

const pg = new PlangsGraph().loadJSON(await Bun.file(localPath("static/plangs.json")).json());

const server = Bun.serve({
  async fetch(req) {
    const path = new URL(req.url).pathname;
    console.log(`Request for ${path}`);

    if (path === "/sse") return sse(req);

    const page = await resolvePage(path, pg);
    if (page) return html(page);

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
