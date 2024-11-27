import { join } from "node:path";

import { type PlangsGraph, VCommunity, VLearning, type VPlang } from "@plangs/plangs/graph";
import type { Image } from "@plangs/plangs/graph/vertex_data_schemas";

export const DEFINTIONS_PATH = join(import.meta.dir, "../../definitions/src/definitions");

/**
 * Generate a path for a TS file for a Node defintion.
 * VPlang nodes are stored in a folder structure based on the first letter of the key.
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
export function genericCodeGen(pg: PlangsGraph, kind: "license" | "paradigm" | "platform" | "tag" | "typeSystem" | "learning" | "community"): string {
  const definitions: string[] = [...pg.nodes[kind].values]
    .sort((a, b) => a.key.localeCompare(b.key))
    .map(node => {
      const relations: string[] = [];

      if (node instanceof VCommunity) {
        addRelKeys(relations, "relPlangs", node.relPlang.keys);
        addRelKeys(relations, "relTags", node.relTag.keys);
      }

      if (node instanceof VLearning) {
        addRelKeys(relations, "relPlangs", node.relPlangs.keys());
        addRelKeys(relations, "relTags", node.relTag.keys());
        addRelKeys(relations, "relCommunities", node.relCommunities.keys());
      }

      return `${genSet(kind, node.key, node.data)}${relations.join("")}`;
    });

  return `import type { PlangsGraph } from "@plangs/plangs/graph";

  export function define(g: PlangsGraph) {
    ${definitions.join("\n\n")}
  }
  `;
}

/** Generate code that can reconstruct the state of a VPlang node. */
export function plangCodeGen(plang: VPlang): string {
  // The order of calls determines order in generated code.
  const relations: string[] = [];
  addRelKeys(relations, "relCompilesTo", plang.relCompilesTo.keys);
  addRelKeys(relations, "relDialectOf", plang.relDialectOf.keys);
  addRelKeys(relations, "relImplements", plang.relImplements.keys, (key: string) => key !== plang.key);
  addRelKeys(relations, "relInfluencedBy", plang.relInfluencedBy.keys);
  addRelKeys(relations, "relLicenses", plang.relLicense.keys);
  addRelKeys(relations, "relParadigms", plang.relParadigm.keys);
  addRelKeys(relations, "relPlatforms", plang.relPlatform.keys);
  addRelKeys(relations, "relTags", plang.relTag.keys);
  addRelKeys(relations, "relTsys", plang.relTypeSystem.keys);
  addRelKeys(relations, "relWrittenIn", plang.relWrittenInPlang.keys);
  addRelKeys(relations, "relApps", plang.relApp.keys);
  addRelKeys(relations, "relLibs", plang.relLibrary.keys);
  addRelKeys(relations, "relTools", plang.relTool.keys);

  const apps = plang.relApp.vertices.map(app => genSet("app", app.key, app.data));
  const libs = plang.relLibrary.vertices.map(lib => genSet("lib", lib.key, lib.data));
  const tools = plang.relTool.vertices.map(tool => genSet("tool", tool.key, tool.data));

  const bundles: string[] = []; /* TODO. plang.nodes().map(bundle => {
    const bunRel: string[] = [];
    addRelKeys(bunRel, "relTools", bundle.relTools.keys());
    return `${genSet("bundle", bundle.key, bundle.data)}${bunRel.join("")}`;
  });*/

  return `import type { PlangsGraph } from "@plangs/plangs/graph";

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

function addRelKeys(out: string[], relName: string, keys: Set<string>, accept: (key: string) => boolean = () => true) {
  const filtered = [...keys].filter(accept);
  if (filtered.length > 0) out.push(`\n    .${relName}.add(${JSON.stringify(filtered.sort())})`);
}
