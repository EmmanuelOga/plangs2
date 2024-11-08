// @ts-ignore it works on bun...
import { basename, join } from "node:path";

import { Glob } from "bun";

import type { NPlang, PlangsGraph } from "@plangs/plangs";

async function getPaths(glob: Glob, basePath: string): Promise<string[]> {
  const paths = [] as string[];
  for await (const path of glob.scan(basePath)) paths.push(path);
  return paths.sort();
}

/** Imports all definitions and calls the `define` methods */
export async function loadAllDefinitions(g: PlangsGraph, options: { scanImages: boolean }) {
  for (const path of await getPaths(new Glob("**/*.ts"), join(import.meta.dir, "definitions"))) {
    const module = await import(`./definitions/${path}`);
    if (typeof module.define === "function") module.define(g);
  }

  // Add any images to the nodes.

  if (options.scanImages) {
    for (const path of await getPaths(new Glob("**/*.{png,jpg,svg}"), join(import.meta.dir, "definitions/plangs"))) {
      const [pk, k] = basename(path).split(".");
      const kind = k === "screenshot" || k === "logo" ? k : "other";
      const plKey: NPlang["key"] = `pl+${pk.startsWith("_") ? `.${pk.slice(1)}` : pk}`;
      const pl = g.nodes.pl.get(plKey);
      if (!pl) console.warn("Can't find plang", plKey, "for image", path);
      pl?.addImages([{ kind, title: pl.name, url: `/images/${path}` }]);
    }
  }
}
