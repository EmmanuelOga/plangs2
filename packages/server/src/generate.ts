import { copyFile } from "node:fs/promises";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";
import { Glob } from "bun";

import { loadAllDefinitions } from "@plangs/definitions";
import { PlangsGraph } from "@plangs/plangs";

import { loadPosts } from "./content";
import { resolvePage } from "./resolve_page";
import { vdomToHTML } from "./utils/server";

const FIXED_PATHS = ["/", "/about", "/apps", "/blog", "/libs", "/licenses", "/paradigms", "/platforms", "/tags", "/tools", "/tsys"];

const STATIC_BASE = join(import.meta.dir, "../static/");
const DEFINTIONS_BASE = join(import.meta.dir, "../../definitions/src/definitions");

/**
 * The "dual" of resolvePage. We call resolvePage for each possible URL,
 * then save the URL to disk instead of serving it.
 * We also need to save static assets like images and the files on `server/static`.
 */
async function generatePages(dstRoot: string) {
  const pg = new PlangsGraph();
  await loadAllDefinitions(pg, { scanImages: true });
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
  for await (const path of new Glob("**/*.{svg,png,jpg}").scan({ cwd: join(DEFINTIONS_BASE, "pl"), onlyFiles: true })) {
    const srcPath = join(DEFINTIONS_BASE, "pl", path);
    const dstPath = join(dstRoot, "images", path);
    await ensureDir(dstPath);
    await copyFile(srcPath, dstPath);
  }

  // Generate plangs.json
  Bun.write(join(dstRoot, "plangs.json"), JSON.stringify(pg));

  // Generate every plang page.
  const plPaths = pg.nodes.pl.values.map(pl => `/${pl.plainKey}`);

  // Generate every blog post.
  const blogPaths = pg.nodes.post.values.map(pl => `/blog/${pl.plainKey}`);

  // Generate all pages.
  for (const path of [...plPaths, ...blogPaths, ...FIXED_PATHS]) {
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

if (process.argv[2] === "generate") {
  const dstRoot = process.argv[3];
  console.log("Generating to", dstRoot);
  await generatePages(dstRoot);
} else {
  console.log("Usage: cmd generate dst-root-path");
}
