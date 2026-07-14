import { existsSync, readdirSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { loadGraph, materialize, type PlangsGraph } from "@plangs/graph";

// Resolve the dataset via Node package resolution of @plangs/data so it works
// regardless of how Vite bundles this module during the Astro build.
const require = createRequire(import.meta.url);
const DATA_ROOT = dirname(require.resolve("@plangs/data/package.json"));
const NODES_DIR = join(DATA_ROOT, "nodes");
const ASSETS_DIR = join(DATA_ROOT, "assets");

let cachedGraph: PlangsGraph | undefined;
let cachedAssets: Set<string> | undefined;

/** Build-time singleton: load the dataset once, materialize inferred edges. */
export function getGraph(): PlangsGraph {
  if (!cachedGraph) {
    const { graph } = loadGraph(NODES_DIR);
    materialize(graph);
    cachedGraph = graph;
  }
  return cachedGraph;
}

function assetIndex(): Set<string> {
  if (cachedAssets) return cachedAssets;
  const set = new Set<string>();
  if (existsSync(ASSETS_DIR)) {
    for (const kind of readdirSync(ASSETS_DIR)) {
      const dir = join(ASSETS_DIR, kind);
      try {
        for (const f of readdirSync(dir)) {
          if (f.endsWith(".webp")) set.add(`${kind}/${f.replace(/\.webp$/, "")}`);
        }
      } catch {
        // not a directory
      }
    }
  }
  cachedAssets = set;
  return set;
}

export function thumbUrl(kind: string, slug: string): string | undefined {
  return assetIndex().has(`${kind}/${slug}`) ? `/images/vertex/${kind}/${slug}.webp` : undefined;
}
