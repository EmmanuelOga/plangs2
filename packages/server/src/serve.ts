// biome-ignore lint/style/useNodejsImportProtocol: not needed with Bun.
import { watch } from "fs";

// @ts-ignore works ok with Bun
import { extname, join } from "node:path";

import { loadAllDefinitions } from "@plangs/definitions";
import { PlangsGraph } from "@plangs/plangs";

import { createNPosts } from "./content";
import { WEBSOCKETS, notifyWebsockets } from "./livereload";
import { resolvePage } from "./resolve_page";
import { contentTypeFor, staticResponse, vdomToHTML } from "./util";

const watchPath = join(import.meta.dir, "..");
console.info("Watching for file changes in:", watchPath);
watch(watchPath, { recursive: true }, (event, filename) => {
  console.info("File System: ", event, filename);
  notifyWebsockets("reload");
});

const pg = new PlangsGraph();
await loadAllDefinitions(pg);
await createNPosts(pg);

const server = Bun.serve({
  async fetch(req): Promise<Response> {
    const path = new URL(req.url).pathname;

    if (path === "/livereload") {
      const success = server.upgrade(req);
      console.info("websocket update success:", success);
      return success ? new Response("OK.", { status: 404 }) : new Response("ERROR.", { status: 500 });
    }

    if (path === "/plangs.json") {
      return staticResponse(JSON.stringify(pg), "application/json");
    }

    if (path.startsWith("/images")) {
      const img = Bun.file(join(import.meta.dir, "../../definitions/src/definitions", path.slice(8)));
      if (await img.exists()) return staticResponse(img, `image/${extname(path)}`);
      return new Response(null, { status: 404 });
    }

    const page = await resolvePage(path, pg);
    if (page) return staticResponse(vdomToHTML(page), "text/html");

    const contentType = contentTypeFor(path);
    if (contentType) {
      console.log("static request:", path, contentType);
      const file = Bun.file(join(import.meta.dir, "../static", path.slice(1)));
      if (await file.exists()) return staticResponse(file, contentType);
    }

    console.warn("404", path);
    return new Response(`Page not found: ${JSON.stringify(path)}`, { status: 404 });
  },
  websocket: {
    async message(ws, message) {
      if (message === "PING") return;
      WEBSOCKETS.add(ws);
      console.info("livereload:", message, "current websockets:", WEBSOCKETS.size);
    },
    close(ws) {
      WEBSOCKETS.delete(ws);
    },
  },
});

console.log("Listening on", { url: server.url.href });
