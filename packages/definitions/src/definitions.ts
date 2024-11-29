// @ts-ignore it works on bun...
import { basename, join } from "node:path";

import { Glob } from "bun";

import type { PlangsGraph, VPlang } from "@plangs/plangs/graph";

async function getPaths(glob: Glob, basePath: string): Promise<string[]> {
  const paths = [] as string[];
  for await (const path of glob.scan(basePath)) paths.push(path);
  return paths.sort();
}

/** Imports all definitions and calls the `define` methods */
export async function loadDefinitions(g: PlangsGraph, options: { scanImages: boolean }) {
  for (const path of await getPaths(new Glob("**/*.ts"), join(import.meta.dir, "definitions"))) {
    const module = await import(`./definitions/${path}`);
    if (typeof module.define === "function") module.define(g);
  }

  // Add any images to the vertices.

  if (options.scanImages) {
    for (const path of await getPaths(new Glob("**/*.{png,jpg,svg}"), join(import.meta.dir, "definitions/pl"))) {
      const [pk, k] = basename(path).split(".");
      const kind = k === "screenshot" || k === "logo" ? k : "other";
      const plKey: VPlang["key"] = `pl+${pk.replaceAll("_", ".")}`;
      const pl = g.plang.get(plKey);
      if (pl) {
        pl.addImages([{ kind, title: pl.name, url: `/images/${path}` }]);
      } else {
        console.warn("Can't find plang", plKey, "for image", path);
      }
    }
  }
}
