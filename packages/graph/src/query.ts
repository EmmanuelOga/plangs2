import { EDGE_BY_NAME, type NodeKind } from "@plangs/schema";
import type { NodeAttrs, PlangsGraph } from "./load";

/** All node keys of a given kind (defined nodes only). */
export function nodesByKind(graph: PlangsGraph, kind: NodeKind): string[] {
  const out: string[] = [];
  graph.forEachNode((key, attrs) => {
    if (attrs.defined && attrs.kind === kind) out.push(key);
  });
  return out;
}

export function getNode(graph: PlangsGraph, key: string): NodeAttrs | undefined {
  return graph.hasNode(key) ? graph.getNodeAttributes(key) : undefined;
}

/** Outgoing targets along a named edge. */
export function outByEdge(graph: PlangsGraph, key: string, edgeName: string): string[] {
  if (!graph.hasNode(key)) return [];
  const out: string[] = [];
  graph.forEachOutEdge(key, (_e, attrs, _s, dst) => {
    if (attrs.name === edgeName) out.push(dst);
  });
  return out;
}

/** Incoming sources along a named edge. */
export function inByEdge(graph: PlangsGraph, key: string, edgeName: string): string[] {
  if (!graph.hasNode(key)) return [];
  const out: string[] = [];
  graph.forEachInEdge(key, (_e, attrs, src) => {
    if (attrs.name === edgeName) out.push(src);
  });
  return out;
}

/** Languages transitively influencing `key` (uses materialized edge if present). */
export function influencedByTransitive(graph: PlangsGraph, key: string): string[] {
  const mat = outByEdge(graph, key, "plangRelInfluencedByTransitive");
  if (mat.length) return mat;
  // Fallback: compute on the fly along the direct edge.
  const seen = new Set<string>();
  const stack = [...outByEdge(graph, key, "plangRelInfluencedBy")];
  for (let n = stack.pop(); n !== undefined; n = stack.pop()) {
    if (seen.has(n)) continue;
    seen.add(n);
    stack.push(...outByEdge(graph, n, "plangRelInfluencedBy"));
  }
  return [...seen];
}

/** Plangs that declare the given paradigm. */
export function plangsByParadigm(graph: PlangsGraph, paradigmKey: string): string[] {
  return inByEdge(graph, paradigmKey, "plangRelParadigms");
}

/** Immediate family of a plang: compilesTo ∪ dialectOf ∪ implements. */
export function familyTree(graph: PlangsGraph, key: string): string[] {
  const set = new Set<string>();
  for (const name of ["plangRelCompilesTo", "plangRelDialectOf", "plangRelImplements"]) {
    for (const n of outByEdge(graph, key, name)) set.add(n);
  }
  return [...set];
}

void EDGE_BY_NAME;
