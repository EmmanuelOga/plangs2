// @ts-ignore works ok with Bun
import { extname, join } from "node:path";

import { loadAllDefinitions } from "@plangs/definitions";
import { PlangsGraph } from "@plangs/plangs";

import { loadBlogPosts } from "./content";
import { resolvePage } from "./resolve_page";
import { packagesPath, renderComponent, validStaticRequest } from "./util";

export const REPO_ROOT = join(import.meta.dir, "../../..");

const pg = new PlangsGraph();
await loadAllDefinitions(pg);
await loadBlogPosts(pg);

const server = Bun.serve({
  async fetch(req) {
    const path = new URL(req.url).pathname;

    if (path === "/plangs.json") {
      return new Response(JSON.stringify(pg), { headers: { "Content-Type": "application/json" } });
    }

    if (path.startsWith("/images")) {
      const img = Bun.file(packagesPath("definitions/src/definitions", path.slice(8)));
      if (await img.exists()) return new Response(img, { headers: { "Content-Type": `image/${extname(path)}` } });
      return new Response(null, { status: 404 });
    }

    const page = await resolvePage(path, pg);
    if (page) return new Response(renderComponent(page), { headers: { "Content-Type": "text/html" } });

    if (validStaticRequest(path)) {
      const file = Bun.file(packagesPath("server/static", path.slice(1)));
      if (await file.exists()) return new Response(file);
    }

    console.warn(`404 for ${path}`);
    return new Response(`Page not found: ${JSON.stringify(path)}`, { status: 404 });
  },
});

console.log(`Listening on ${server.url}`);
