import type { ServerWebSocket } from "bun";

// biome-ignore lint/style/useNodejsImportProtocol: not needed with Bun.
import { watch } from "fs";

// @ts-ignore works ok with Bun
import { extname, join } from "node:path";

import { loadAllDefinitions } from "@plangs/definitions";
import { PlangsGraph } from "@plangs/plangs";

import { loadPosts } from "./content";
import { notifyWebsockets, trackWebsocket, untrackWebsocket } from "./livereload";
import { resolvePage } from "./resolve_page";
import { contentTypeFor, staticResponse, vdomToHTML } from "./utils/server";

const pg = new PlangsGraph();
await loadAllDefinitions(pg);
await loadPosts(pg);

const server = Bun.serve({
  async fetch(req: Request): Promise<Response> {
    const path = new URL(req.url).pathname;

    if (path === "/livereload") {
      const success = server.upgrade(req);
      return success ? new Response("OK.", { status: 404 }) : new Response("ERROR.", { status: 500 });
    }

    if (path === "/plangs.json") {
      return staticResponse(req, JSON.stringify(pg), "application/json");
    }

    const page = await resolvePage(path, pg);
    if (page) return staticResponse(req, vdomToHTML(page), "text/html");

    if (path.startsWith("/images")) {
      const img = Bun.file(join(import.meta.dir, "../../definitions/src/definitions/plangs", path.slice(8)));
      const ct = contentTypeFor(path);
      if (ct && (await img.exists())) return staticResponse(req, img, ct);
      // Do not return, allow checking for a static image.
    }

    const contentType = contentTypeFor(path);
    if (contentType) {
      const file = Bun.file(join(import.meta.dir, "../static", path.slice(1)));
      if (await file.exists()) return staticResponse(req, file, contentType);
    }

    console.warn("404", path);
    return new Response(`Page not found: ${JSON.stringify(path)}`, { status: 404 });
  },
  websocket: {
    async message(ws: ServerWebSocket, message) {
      if (message === "PING") return;
      trackWebsocket(ws);
    },
    close(ws) {
      untrackWebsocket(ws);
    },
  },
});

const watchPath = join(import.meta.dir, "..");
watch(watchPath, { recursive: true }, (event, filename) => notifyWebsockets("RELOAD"));
console.log(server.url.href, "watching", watchPath, pg.nodeCount, "plang nodes,", pg.edgeCount, "edges.");
