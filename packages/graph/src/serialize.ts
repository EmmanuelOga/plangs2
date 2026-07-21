import { ALL_KINDS, EDGES, type NodeKind } from "@plangs/schema";
import type { PlangsGraph } from "./load.ts";

/**
 * A serialized edge target: the target key, or — when the authored ref carried
 * D8 valid-time qualifiers — `{ref, since?, until?}`, the same convention the
 * YAML speaks.
 */
export type SerializedRelTarget = string | ({ ref: string } & Record<string, unknown>);

export interface SerializedGraph {
  vertices: Record<string, Record<string, unknown>>;
  edges: Record<string, Record<string, SerializedRelTarget[]>>;
}

/**
 * Serialize the graph: `{ vertices: {kind: {key: data}}, edges: {edgeName:
 * {fromKey: target[]}} }`.
 *
 * Keys are V3 KEYS (`pl/nim`) as of E2. They used to be emitted in v2's
 * `pl+nim` form so the output was directly comparable to the migration oracle;
 * the drift report now converts the frozen fixture instead, which keeps one
 * key shape in the codebase rather than two. This is the shape the public
 * `/data/plangs.json` ships, and it matches every other data route
 * (`/data/nodes/...`, `/data/facets/...`) and `llms.txt`.
 *
 * Edge target arrays are sorted by target key, and all kinds and edges are
 * always present (empty as `{}`), so the artifact's shape does not depend on
 * the data. Targets are plain keys unless the edge carries authored qualifiers
 * (E6/D8), which serialize as annotated refs.
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

  // edgeName -> src -> dst -> edge props (undefined for an unqualified edge)
  const acc = new Map<string, Map<string, Map<string, Record<string, unknown> | undefined>>>();
  graph.forEachDirectedEdge((_edge, attrs, src, dst) => {
    let byName = acc.get(attrs.name);
    if (!byName) {
      byName = new Map();
      acc.set(attrs.name, byName);
    }
    let byDst = byName.get(src);
    if (!byDst) {
      byDst = new Map();
      byName.set(src, byDst);
    }
    if (!byDst.has(dst)) byDst.set(dst, attrs.props);
  });

  for (const [name, byName] of acc) {
    const obj: Record<string, SerializedRelTarget[]> = {};
    for (const [src, byDst] of byName) {
      obj[src] = [...byDst.keys()].sort().map(dst => {
        const props = byDst.get(dst);
        return props && Object.keys(props).length ? { ref: dst, ...props } : dst;
      });
    }
    edges[name] = obj;
  }

  return { vertices, edges };
}
