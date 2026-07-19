import { ALL_KINDS, EDGES, type NodeKind } from "@plangs/schema";
import type { PlangsGraph } from "./load.ts";

export interface SerializedGraph {
  vertices: Record<string, Record<string, unknown>>;
  edges: Record<string, Record<string, string[]>>;
}

/**
 * Serialize the graph: `{ vertices: {kind: {key: data}}, edges: {edgeName:
 * {fromKey: toKey[]}} }`.
 *
 * Keys are V3 KEYS (`pl/nim`) as of E2. They used to be emitted in v2's
 * `pl+nim` form so the output was directly comparable to the migration oracle;
 * the drift report now converts the frozen fixture instead, which keeps one
 * key shape in the codebase rather than two. This is the shape the public
 * `/data/plangs.json` ships, and it matches every other data route
 * (`/data/nodes/...`, `/data/facets/...`) and `llms.txt`.
 *
 * Edge target arrays are sorted, and all kinds and edges are always present
 * (empty as `{}`), so the artifact's shape does not depend on the data.
 */
export function toSerializedGraph(graph: PlangsGraph): SerializedGraph {
  const vertices: SerializedGraph["vertices"] = {};
  for (const kind of ALL_KINDS as NodeKind[]) vertices[kind] = {};

  graph.forEachNode((key, attrs) => {
    if (!attrs.defined) return; // dangling targets live only in edges
    const bucket = vertices[attrs.kind];
    if (bucket) bucket[key] = attrs.data;
  });

  const edges: SerializedGraph["edges"] = {};
  for (const e of EDGES) edges[e.name] = {};

  // edgeName -> src -> Set<dst>
  const acc = new Map<string, Map<string, Set<string>>>();
  graph.forEachDirectedEdge((_edge, attrs, src, dst) => {
    let byName = acc.get(attrs.name);
    if (!byName) {
      byName = new Map();
      acc.set(attrs.name, byName);
    }
    let set = byName.get(src);
    if (!set) {
      set = new Set();
      byName.set(src, set);
    }
    set.add(dst);
  });

  for (const [name, byName] of acc) {
    const obj: Record<string, string[]> = {};
    for (const [src, dsts] of byName) obj[src] = [...dsts].sort();
    edges[name] = obj;
  }

  return { vertices, edges };
}
