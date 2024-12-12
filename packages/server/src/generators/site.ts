import { copyFile } from "node:fs/promises";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";
import { Glob } from "bun";

import { loadDefinitions } from "@plangs/definitions";
import { PlangsGraph } from "@plangs/plangs/graph";
import { loadPosts } from "@plangs/server/content";
import { GRID_PATHS, REFERENCE_PATHS, resolvePage } from "@plangs/server/resolve_page";
import { vdomToHTML } from "@plangs/server/utils/server";

const STATIC_BASE = join(import.meta.dir, "../../static/");
const DEFINTIONS_BASE = join(import.meta.dir, "../../../definitions/src/definitions");

/**
 * The "dual" of resolvePage. We call resolvePage for each possible URL,
 * then save the URL to disk instead of serving it.
 * We also need to save static assets like images and the files on `server/static`.
 */
async function generatePages(dstRoot: string) {
  const pg = new PlangsGraph();
  await loadDefinitions(pg, { scanImages: true });
  await loadPosts(pg);

  const ensureDir = async (path: string) => {
    const dir = path.substring(0, path.lastIndexOf("/"));
    return mkdir(dir, { recursive: true });
  };

  // Copy all static files.
  for await (const path of new Glob("**/*").scan({ cwd: STATIC_BASE, onlyFiles: true })) {
    const srcPath = join(STATIC_BASE, path);
    const dstPath = join(dstRoot, path);
    await ensureDir(dstPath);
    await copyFile(srcPath, dstPath);
  }

  // Copy all images on definitions.
  for await (const path of new Glob("**/*.{svg,png,jpg}").scan({ cwd: join(DEFINTIONS_BASE, "plang"), onlyFiles: true })) {
    const srcPath = join(DEFINTIONS_BASE, "plang", path);
    const dstPath = join(dstRoot, "images", path);
    await ensureDir(dstPath);
    await copyFile(srcPath, dstPath);
  }

  // Generate plangs.json
  Bun.write(join(dstRoot, "plangs.json"), JSON.stringify(pg));

  const allPaths = [...GRID_PATHS.keys(), ...REFERENCE_PATHS.keys(), "/about", "/blog"];

  for (const vertices of Object.values(pg.vertices)) {
    for (const vertex of vertices.values) allPaths.push(vertex.href);
  }

  // Generate all pages.
  for (const path of allPaths) {
    const page = await resolvePage(path, pg);
    if (page) {
      const dstPath = join(dstRoot, `${path === "/" ? "index" : path}.html`);
      ensureDir(dstPath);
      Bun.write(dstPath, vdomToHTML(page, false));
    } else {
      console.warn("Page could not be resolved for path:", path);
    }
  }
}

const dstRoot = process.argv[2];
if (!dstRoot) throw new Error("Missing destination root path.");
console.log("Generating to", dstRoot);
await generatePages(dstRoot);
