import { join } from "node:path";

import type { MapTap } from "@plangs/auxiliar/map_tap";
import { type AnyEdge, type NBundle, NCommunity, NLearning, type NPlang, type PlangsGraph } from "@plangs/plangs";
import type { Image, N } from "@plangs/plangs/schema";

export const DEFINTIONS_PATH = join(import.meta.dir, "../../definitions/src/definitions");

/**
 * Generate a path for a TS file for a Node defintion.
 * NPlang nodes are stored in a folder structure based on the first letter of the key.
 * The other nodes are stored in a flat structure.
 */
export function tsNodePath(kind: N, plainKey?: string): string {
  if (kind === "pl") {
    if (!plainKey) throw new Error("plainKey is required for pl nodes.");
    const base = plainKey.replace(/[^a-zA-Z0-9\_\+\-]/g, "_");
    return join(DEFINTIONS_PATH, kind, base[0], base, `${base}.ts`);
  }
  if (plainKey) throw new Error("plainKey is required ONLY for pl nodes.");
  return join(DEFINTIONS_PATH, `${kind}.ts`);
}

/** Generate code for nodes of the given kind. */
export function genericCodeGen(pg: PlangsGraph, kind: "license" | "paradigm" | "plat" | "tag" | "tsys" | "learning" | "community"): string {
  const definitions: string[] = pg.nodes[kind].values.existing
    .sort((a, b) => a.key.localeCompare(b.key))
    .map(node => {
      const relations: string[] = [];

      if (node instanceof NCommunity) {
        addRelKeys(relations, "relPlangs", node.relPlangs.keys());
        addRelKeys(relations, "relTags", node.relTags.keys());
      }

      if (node instanceof NLearning) {
        addRelKeys(relations, "relPlangs", node.relPlangs.keys());
        addRelKeys(relations, "relTags", node.relTags.keys());
        addRelKeys(relations, "relCommunities", node.relCommunities.keys());
      }

      return `${genSet(kind, node.key, node.data)}${relations.join("")}`;
    });

  return `import type { PlangsGraph } from "@plangs/plangs";

  export function define(g: PlangsGraph) {
    ${definitions.join("\n\n")}
  }
  `;
}

/** Generate code that can reconstruct the state of a NPlang node. */
export function plangCodeGen(plang: NPlang): string {
  // The order of calls determines order in generated code.
  const relations: string[] = [];
  addRelKeys(relations, "relCompilesTo", plang.relCompilesTo.keys());
  addRelKeys(relations, "relDialectOf", plang.relDialectOf.keys());
  addRelKeys(relations, "relImplements", plang.relImplements.keys(), (key: string) => key !== plang.key);
  addRelKeys(relations, "relInfluencedBy", plang.relInfluencedBy.keys());
  addRelKeys(relations, "relLicenses", plang.relLicenses.keys());
  addRelKeys(relations, "relParadigms", plang.relParadigms.keys());
  addRelKeys(relations, "relPlBundles", plang.relPlBundles.keys());
  addRelKeys(relations, "relPlatforms", plang.relPlatforms.keys());
  addRelKeys(relations, "relPosts", plang.relPosts.keys());
  addRelKeys(relations, "relTags", plang.relTags.keys());
  addRelKeys(relations, "relTsys", plang.relTsys.keys());
  addRelKeys(relations, "relWrittenIn", plang.relWrittenIn.keys());
  addRelKeys(relations, "relApps", plang.relApps.keys());
  addRelKeys(relations, "relLibs", plang.relLibs.keys());
  addRelKeys(relations, "relTools", plang.relTools.keys());

  const apps = plang.relApps.nodes().map(app => genSet("app", app.key, app.data));
  const libs = plang.relLibs.nodes().map(lib => genSet("lib", lib.key, lib.data));
  const tools = plang.relTools.nodes().map(tool => genSet("tool", tool.key, tool.data));
  const bundles = plang.relPlBundles.nodes().map(bundle => {
    const bunRel: string[] = [];
    addRelKeys(bunRel, "relTools", bundle.relTools.keys());
    return `${genSet("bundle", bundle.key, bundle.data)}${bunRel.join("")}`;
  });

  return `import type { PlangsGraph } from "@plangs/plangs";

  export function define(g: PlangsGraph) {
    ${genSet("pl", plang.key, plang.data)}${relations.join("")}

    // TOOLS

    ${tools.join("\n\n")}

    // TOOL BUNDLES

    ${bundles.join("\n\n")}

    // LIBRARIES

    ${libs.join("\n\n")}

    // APPS

    ${apps.join("\n\n")}
  }
  `;
}

// Generate a setter for the node data.
// biome-ignore lint/suspicious/noExplicitAny: Any data is fine here.
const genSet = (nodeName: N, key: string, data: any) => {
  /** Cleanup data in place: sort keys, remove blank values. */
  for (const [k, v] of Object.entries(data)) {
    if (Array.isArray(v)) {
      if (v.length === 0) delete data[k];
      else v.sort();
    } else if (v === null || v === undefined || v === "") {
      delete data[k];
    }
  }

  // Remove links to local images, which are generated by the server on data load.
  if ("images" in data && Array.isArray(data.images)) {
    const images = data.images.filter(({ url }: Image) => !url.startsWith("/"));
    if (images.length > 0) data.images = images;
    else delete data.images;
  }

  return `g.nodes.${nodeName}.set(${JSON.stringify(key)}, ${JSON.stringify(data)})`;
};

function addRelKeys(out: string[], relName: string, keys: string[], accept: (key: string) => boolean = () => true) {
  const filtered = keys.filter(accept);
  if (filtered.length > 0) out.push(`\n    .${relName}.add(${JSON.stringify(filtered.sort())})`);
}
