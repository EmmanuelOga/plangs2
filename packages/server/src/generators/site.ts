import { copyFile, mkdir, rename, rmdir } from "node:fs/promises";
import { join } from "node:path";
import { $, Glob } from "bun";
import * as esbuild from "esbuild";
import { h } from "preact";
import render from "preact-render-to-string";

import { loadDefinitions } from "@plangs/definitions";
import { PlangsGraph } from "@plangs/plangs/graph";
import { LAYOUT_DEFAULTS } from "@plangs/server/components/layout";
import { loadPosts } from "@plangs/server/content";
import { appESBuildOptions, cffESBuildOptions } from "@plangs/server/esbuilder";
import { GRID_PATHS, REFERENCE_PATHS, resolvePage } from "@plangs/server/resolve_page";
import { vdomToHTML } from "@plangs/server/utils/server";

const ROOT = join(import.meta.dir, "../../../..");
const OUTPUT = join(ROOT, "output");
const STATIC = join(ROOT, "packages/server/static");
const ASSETS = join(ROOT, "packages/definitions/assets");

const BUILD_DATE = new Date().toISOString().split("T")[0];
const HOST = "plangs.page";

const ensureDir = async (path: string) => {
  const dir = path.substring(0, path.lastIndexOf("/"));
  return mkdir(dir, { recursive: true });
};

/** Recreate the output directory to start fresh. */
async function resetOutput() {
  await rmdir(OUTPUT, { recursive: true });
  await mkdir(OUTPUT);
  await Bun.write(join(OUTPUT, ".gitignore"), "*");
}

/** Bundle the App's JS with ESBuild. */
async function generateJSBundle(outputPath: string, pg: PlangsGraph) {
  // We need to generate the data first to get the hash, and then use it in the define.
  const data = JSON.stringify(pg.toJSON());
  const dataName = `plangs-${Bun.hash(data)}-${BUILD_DATE}.json`;
  await Bun.write(join(outputPath, dataName), data);
  await esbuild.build(appESBuildOptions("prod", dataName, join(outputPath, "app.js")));
  await esbuild.build(cffESBuildOptions(join(outputPath, "_worker.js")));
}

/** Bundle the App's CSS with Tailwind. 4.0 beta doesn't have a good way to call this from code at the moment. */
async function generateCSS(outputPath: string) {
  await $`bun x @tailwindcss/cli@next -m -i ${join(ROOT, "styles.css")} -o ${join(outputPath, "app.css")}`;
}

async function hashOutputs(outputPath: string) {
  const hashedJS = `app-${Bun.hash(await Bun.file(join(outputPath, "app.js")).text())}-${BUILD_DATE}.js`;
  const hashedCSS = `app-${Bun.hash(await Bun.file(join(outputPath, "app.css")).text())}-${BUILD_DATE}.css`;

  await rename(join(outputPath, "app.js"), join(outputPath, hashedJS));
  await rename(join(outputPath, "app.js.map"), join(outputPath, `${hashedJS}.map`));
  await rename(join(outputPath, "app.css"), join(outputPath, hashedCSS));

  LAYOUT_DEFAULTS.jsBundle = `/${hashedJS}`;
  LAYOUT_DEFAULTS.cssBundle = `/${hashedCSS}`;
}

/**
 * The "dual" of resolvePage. We call resolvePage for each possible URL,
 * then save the URL to disk instead of serving it.
 * We also need to save static assets like images and the files on `server/static`.
 */
async function generateRest(outputPath: string, pg: PlangsGraph) {
  const timestamp = new Date().toISOString();

  // Files to skip when copying static files.
  const skip = ["app.js", "app.js.map", "app.css", "app.css.map"];

  // Copy static files.
  for await (const path of new Glob("**/*").scan({ cwd: STATIC, onlyFiles: true })) {
    if (skip.includes(path)) continue;
    const srcPath = join(STATIC, path);
    const dstPath = join(outputPath, path);
    await ensureDir(dstPath);
    await copyFile(srcPath, dstPath);
  }

  // Copy all vertex assets (images).
  for await (const path of new Glob("**/*.{svg,png,jpg,webp}").scan({ cwd: ASSETS, onlyFiles: true })) {
    const srcPath = join(ASSETS, path);
    const dstPath = join(outputPath, "images/vertex", path);
    await ensureDir(dstPath);
    await copyFile(srcPath, dstPath);
  }

  // Collect all paths.
  const allPaths = [...GRID_PATHS.keys(), ...REFERENCE_PATHS.keys(), "/about", "/blog", "/edit"];
  for (const vertices of Object.values(pg.vertices)) {
    for (const vertex of vertices.values) allPaths.push(vertex.href);
  }

  // Generate all pages.
  for (const path of allPaths) {
    const page = await resolvePage(path, pg);
    if (page) {
      const dstPath = join(outputPath, `${path === "/" ? "index" : path}.html`);
      ensureDir(dstPath);
      await Bun.write(dstPath, `${vdomToHTML(page)}\n<!-- Generated at ${timestamp} -->`);
    } else {
      console.warn("Page could not be resolved for path:", path);
    }
  }

  // Generate sitemap.
  const sitemap = render(sitemapComponent(allPaths.map(p => `https://${join(HOST, p)}`)), { xml: true });
  await Bun.write(join(outputPath, "sitemap.xml"), sitemap);
}

function sitemapComponent(urls: string[]) {
  return h(
    "urlset",
    { xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9" },
    urls.map(url => h("url", null, h("loc", null, url))),
  );
}

const outputPath = process.argv[2] || OUTPUT;
console.log("Generating to", outputPath);

const pg = new PlangsGraph();
await loadDefinitions(pg, { scanImages: true });
await loadPosts(pg);

if (outputPath === OUTPUT) await resetOutput();
await generateJSBundle(outputPath, pg);
await generateCSS(outputPath);
await hashOutputs(outputPath);
await generateRest(outputPath, pg);
