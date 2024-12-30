import { watch } from "node:fs";
import { join } from "node:path";
import type { ServerWebSocket } from "bun";

import { loadDefinitions } from "@plangs/definitions";
import { PlangsGraph } from "@plangs/plangs/graph";

import { loadPosts } from "./content";
import { notifyWebsockets, trackWebsocket, untrackWebsocket } from "./livereload";
import { resolvePage } from "./resolve_page";
import { contentTypeFor, staticResponse, vdomToHTML } from "./utils/server";

const pg = new PlangsGraph();
await loadDefinitions(pg, { scanImages: true });
await loadPosts(pg);
pg.materialize();

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

    if (path.startsWith("/images/vertex/")) {
      const img = Bun.file(join(import.meta.dir, "../../definitions/assets", path.slice(15)));
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
console.log(server.url.href, "watching", watchPath);
