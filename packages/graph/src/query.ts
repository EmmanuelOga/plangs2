import { EDGE_BY_NAME, EDGES, type NodeKind, parseKey } from "@plangs/schema";
import type { AnyNodeAttrs, NodeAttrs, PlangsGraph } from "./load.ts";

/** All node keys of a given kind (defined nodes only). */
export function nodesByKind(graph: PlangsGraph, kind: NodeKind): string[] {
  const out: string[] = [];
  graph.forEachNode((key, attrs) => {
    if (attrs.defined && attrs.kind === kind) out.push(key);
  });
  return out;
}

export function getNode(graph: PlangsGraph, key: string): AnyNodeAttrs | undefined {
  return graph.hasNode(key) ? graph.getNodeAttributes(key) : undefined;
}

/**
 * Get a node only if it is of `kind`, narrowed to that kind's data shape.
 *
 * The point of the whole exercise: callers that know which kind they want get
 * `data` typed, instead of probing an untyped bag with `typeof` checks. Returns
 * undefined for a missing node OR a node of a different kind, so the kind check
 * and the lookup can't drift apart.
 */
export function getNodeOfKind<K extends NodeKind>(graph: PlangsGraph, key: string, kind: K): NodeAttrs<K> | undefined {
  const attrs = getNode(graph, key);
  return attrs?.kind === kind ? (attrs as NodeAttrs<K>) : undefined;
}

/** `getNodeOfKind(graph, key, "plang")` — by far the most common lookup. */
export function getPlang(graph: PlangsGraph, key: string): NodeAttrs<"plang"> | undefined {
  return getNodeOfKind(graph, key, "plang");
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

/** A node's display name, falling back to its slug then its key. */
export function nodeName(graph: PlangsGraph, key: string): string {
  // `name` is on every kind's schema, so it reads straight off the union.
  return getNode(graph, key)?.data.name ?? parseKey(key)?.slug ?? key;
}

/**
 * First edge connecting two kinds, plus the direction to traverse from `a`.
 *
 * A linear scan of ~52 edges per lookup. Deliberately left alone: an index
 * would be strictly more code for no measurable gain at this size (PLAN §4c).
 */
export function edgeBetween(a: NodeKind, b: NodeKind): { name: string; dir: "out" | "in" } | undefined {
  for (const e of EDGES) {
    if (e.from === a && e.to === b) return { name: e.name, dir: "out" };
    if (e.from === b && e.to === a) return { name: e.name, dir: "in" };
  }
  return undefined;
}

/**
 * Neighbours of `key` that are of `otherKind`, whichever way the edge runs.
 *
 * The direction is a property of the schema, not of the caller, so callers ask
 * "what licenses does this plang have" without knowing that licenses point at
 * plangs rather than the other way round.
 */
export function neighborsByKind(graph: PlangsGraph, key: string, kind: NodeKind, otherKind: NodeKind): string[] {
  const e = edgeBetween(kind, otherKind);
  if (!e) return [];
  return e.dir === "out" ? outByEdge(graph, key, e.name) : inByEdge(graph, key, e.name);
}

/** A node's neighbours along one edge, under that edge's label for this direction. */
export interface RelatedGroup {
  label: string;
  keys: string[];
}

/**
 * Every edge touching `key`, grouped under the label for the direction
 * travelled — "Influenced By" one way, "Influenced" the other.
 *
 * The traversal lives here rather than in the site because it is a question
 * about the graph. Callers decide how to render it (names, links, ordering).
 * Empty groups are dropped: an edge kind with no neighbours is not a section.
 */
export function relatedGroups(graph: PlangsGraph, key: string): RelatedGroup[] {
  const p = parseKey(key);
  if (!p) return [];
  const groups: RelatedGroup[] = [];
  const add = (label: string, keys: string[]) => {
    const uniq = [...new Set(keys)];
    if (uniq.length) groups.push({ label, keys: uniq });
  };
  for (const e of EDGES) {
    if (e.from === p.kind) add(e.fromLabel, outByEdge(graph, key, e.name));
    if (e.to === p.kind) add(e.toLabel, inByEdge(graph, key, e.name));
  }
  return groups;
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
