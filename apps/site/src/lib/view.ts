import { getNode, inByEdge, nodesByKind, outByEdge, type PlangsGraph } from "@plangs/graph";
import { EDGES, KINDS, type NodeKind, parseKey } from "@plangs/schema";
import { thumbUrl } from "./graph";

export interface PlangCard {
  key: string;
  slug: string;
  name: string;
  thumb?: string;
  ranking?: number;
  isTranspiler: boolean;
  facets: Record<string, string[]>;
}

/** Kinds that act as facet dimensions on a grid, in display order. */
const FACET_KINDS: { kind: NodeKind; dim: string; label: string }[] = [
  { kind: "paradigm", dim: "paradigms", label: "Paradigms" },
  { kind: "tag", dim: "tags", label: "Tags" },
  { kind: "platform", dim: "platforms", label: "Platforms" },
  { kind: "typeSystem", dim: "typeSystems", label: "Type systems" },
  { kind: "license", dim: "licenses", label: "Licenses" },
];

/** First edge connecting two kinds, plus the direction to traverse from `a`. */
function edgeBetween(a: NodeKind, b: NodeKind): { name: string; dir: "out" | "in" } | undefined {
  for (const e of EDGES) {
    if (e.from === a && e.to === b) return { name: e.name, dir: "out" };
    if (e.from === b && e.to === a) return { name: e.name, dir: "in" };
  }
  return undefined;
}

/** Facet dimensions actually available for a given node kind. */
export function facetKindsFor(kind: NodeKind): { kind: NodeKind; dim: string; label: string }[] {
  return FACET_KINDS.filter(f => f.kind !== kind && edgeBetween(kind, f.kind));
}

function facetNeighbors(graph: PlangsGraph, key: string, kind: NodeKind, facetKind: NodeKind): string[] {
  const e = edgeBetween(kind, facetKind);
  if (!e) return [];
  return e.dir === "out" ? outByEdge(graph, key, e.name) : inByEdge(graph, key, e.name);
}

export function nodeName(graph: PlangsGraph, key: string): string {
  const n = getNode(graph, key);
  const name = n?.data?.name;
  return typeof name === "string" ? name : (parseKey(key)?.slug ?? key);
}

/**
 * URL segment for a kind. Lower-cased to preserve the legacy scheme exactly
 * (`typeSystem` → `/typesystem/...`); every other kind is already lowercase.
 */
export function urlKind(kind: NodeKind): string {
  return kind.toLowerCase();
}

/** Legacy-compatible: `/{slug}` for plangs, `/{kind}/{slug}` for everything else. */
export function hrefForKey(key: string): string {
  const p = parseKey(key);
  if (!p) return "#";
  return p.kind === "plang" ? `/${p.slug}` : `/${urlKind(p.kind)}/${p.slug}`;
}

/** All nodes of a kind as grid cards, sorted by ranking (ranked first) then name. */
export function nodeCards(graph: PlangsGraph, kind: NodeKind): PlangCard[] {
  const dims = facetKindsFor(kind);
  const cards: PlangCard[] = [];
  for (const key of nodesByKind(graph, kind)) {
    const p = parseKey(key);
    if (!p) continue;
    const data = getNode(graph, key)?.data ?? {};
    const facets: Record<string, string[]> = {};
    for (const d of dims) facets[d.dim] = facetNeighbors(graph, key, kind, d.kind);
    cards.push({
      key,
      slug: p.slug,
      name: typeof data.name === "string" ? data.name : p.slug,
      thumb: thumbUrl(kind, p.slug),
      ranking: typeof data.languishRanking === "number" ? data.languishRanking : undefined,
      isTranspiler: data.isTranspiler === true,
      facets,
    });
  }
  cards.sort((a, b) => {
    const ra = a.ranking ?? Number.POSITIVE_INFINITY;
    const rb = b.ranking ?? Number.POSITIVE_INFINITY;
    return ra !== rb ? ra - rb : a.name.localeCompare(b.name);
  });
  return cards;
}

/** All plangs as grid cards. */
export function plangCards(graph: PlangsGraph): PlangCard[] {
  return nodeCards(graph, "plang");
}

interface RelGroup {
  label: string;
  items: { key: string; name: string; href: string }[];
}

/** Grouped neighbor relations for a node's detail page. */
function relationsFor(graph: PlangsGraph, key: string): RelGroup[] {
  const p = parseKey(key);
  if (!p) return [];
  const groups: RelGroup[] = [];
  const push = (label: string, keys: string[]) => {
    const items = [...new Set(keys)]
      .map(k => ({ key: k, name: nodeName(graph, k), href: hrefForKey(k) }))
      .sort((a, b) => a.name.localeCompare(b.name));
    if (items.length) groups.push({ label, items });
  };
  for (const e of EDGES) {
    if (e.from === p.kind) push(e.fromLabel, outByEdge(graph, key, e.name));
    if (e.to === p.kind) push(e.toLabel, inByEdge(graph, key, e.name));
  }
  return groups;
}

export interface NodeDetail {
  key: string;
  kind: NodeKind;
  kindLabel: string;
  slug: string;
  name: string;
  data: Record<string, unknown>;
  thumb?: string;
  relations: RelGroup[];
}

export function nodeDetail(graph: PlangsGraph, key: string): NodeDetail | undefined {
  const p = parseKey(key);
  const attrs = getNode(graph, key);
  if (!p || !attrs?.defined) return undefined;
  return {
    key,
    kind: p.kind,
    kindLabel: KINDS[p.kind].label,
    slug: p.slug,
    name: typeof attrs.data.name === "string" ? attrs.data.name : p.slug,
    data: attrs.data,
    thumb: thumbUrl(p.kind, p.slug),
    relations: relationsFor(graph, key),
  };
}
