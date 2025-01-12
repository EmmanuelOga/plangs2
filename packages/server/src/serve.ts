import { watch } from "node:fs";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { ServerWebSocket } from "bun";

import { loadDefinitions } from "@plangs/definitions";
import { PlangsGraph } from "@plangs/plangs/graph";

import { loadPosts } from "./content";
import { notifyWebsockets, trackWebsocket, untrackWebsocket } from "./livereload";
import { resolvePage } from "./resolve_page";
import { contentTypeFor, staticResponse, vdomToHTML } from "./utils/server";

const ROOT = join(import.meta.dir, "../../..");

async function loadGraph() {
  const pg = new PlangsGraph();
  await loadDefinitions(pg, { scanImages: true });
  await loadPosts(pg);
  pg.materialize();
  return pg;
}

const pg: PlangsGraph = await loadGraph();

const server = Bun.serve({
  async fetch(req: Request): Promise<Response> {
    const path = new URL(req.url).pathname;

    if (path === "/api/push" && req.method === "POST") {
      try {
        // The most effective way to regen the data is to spawn a bun process.
        // This avoids issues with --watch mode and the server being restarted.
        const newData = await req.json();
        const tmpDir = await mkdtemp(join(tmpdir(), "plangs"));
        const jsonPath = join(tmpDir, "plangs.json");
        await Bun.write(jsonPath, JSON.stringify(newData));

        const regen = Bun.spawn(["bun", "run", "import", jsonPath], { cwd: ROOT });
        await regen.exited;

        if (process.exitCode !== 0) {
          const error = await new Response(regen.stderr).text();
          console.error(error);
          console.error("TMP: ", jsonPath);
          return new Response(`Error creating definitions: ${error}`, { status: 500 });
        }

        await rm(jsonPath, { force: true });

        // NOTE: after moving the files, the --watch mode should restart the server.
        // So we don't reload the data here since the server will be restarted.
        return new Response("OK.");
      } catch (e) {
        return new Response(`Error creating definitions: ${e}`, { status: 500 });
      }
    }

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
