import { ALL_KINDS, EDGES, type NodeKind, newToLegacy } from "@plangs/schema";
import type { PlangsGraph } from "./load.ts";

export interface SerializedGraph {
  vertices: Record<string, Record<string, unknown>>;
  edges: Record<string, Record<string, string[]>>;
}

/**
 * Serialize the graph to the legacy-compatible `SerializedGraph` shape:
 * `{ vertices: {kind: {key: data}}, edges: {edgeName: {fromKey: toKey[]}} }`.
 *
 * Keys are emitted in LEGACY form (`pl+nim`) and edge target arrays are sorted,
 * so the output is directly comparable to the migration reference oracle
 * ("modulo key renames", PLAN §4.6). All 15 kinds and 52 edges are always
 * present (empty as `{}`), matching the legacy `toJSON`.
 */
export function toSerializedGraph(graph: PlangsGraph): SerializedGraph {
  const vertices: SerializedGraph["vertices"] = {};
  for (const kind of ALL_KINDS as NodeKind[]) vertices[kind] = {};

  graph.forEachNode((key, attrs) => {
    if (!attrs.defined) return; // dangling targets live only in edges
    const bucket = vertices[attrs.kind];
    if (bucket) bucket[newToLegacy(key)] = attrs.data;
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
    const s = newToLegacy(src);
    let set = byName.get(s);
    if (!set) {
      set = new Set();
      byName.set(s, set);
    }
    set.add(newToLegacy(dst));
  });

  for (const [name, byName] of acc) {
    const obj: Record<string, string[]> = {};
    for (const [src, dsts] of byName) obj[src] = [...dsts].sort();
    edges[name] = obj;
  }

  return { vertices, edges };
}
