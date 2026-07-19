import { edgeBetween, getNode, getPlang, neighborsByKind, nodeName, nodesByKind, type PlangsGraph, relatedGroups } from "@plangs/graph";
import { KINDS, type NodeData, type NodeKind, parseKey } from "@plangs/schema";
import type { Dim } from "./facets-contract";
import { thumbUrl } from "./graph";
import { type SparkSeries, sparkSeriesOf } from "./sparkline";
import { hrefForKey } from "./url";

/**
 * VIEW MODELS: plain data shaped for templates.
 *
 * This file used to also hold URL policy and graph queries (PLAN §4c). Those
 * moved out — URL policy to `./url.ts`, graph traversal to `@plangs/graph`'s
 * `query.ts` — leaving only the layer that turns graph nodes into things a
 * template renders. Nothing here should traverse edges or know a URL's shape.
 */

export interface PlangCard {
  key: string;
  slug: string;
  name: string;
  thumb?: string;
  ranking?: number;
  facets: Partial<Record<Dim, string[]>>;
}

/**
 * Kinds that act as facet dimensions on a grid, in display order.
 *
 * `dim` is a `Dim`, so this list and the attributes the grid stamps onto cards
 * cannot drift apart: a dimension with no entry in DIMS does not compile.
 */
const FACET_KINDS: { kind: NodeKind; dim: Dim; label: string }[] = [
  { kind: "paradigm", dim: "paradigms", label: "Paradigms" },
  { kind: "tag", dim: "tags", label: "Tags" },
  { kind: "platform", dim: "platforms", label: "Platforms" },
  { kind: "typeSystem", dim: "typeSystems", label: "Type systems" },
  { kind: "license", dim: "licenses", label: "Licenses" },
];

/** Facet dimensions actually available for a given node kind. */
export function facetKindsFor(kind: NodeKind): { kind: NodeKind; dim: Dim; label: string }[] {
  return FACET_KINDS.filter(f => f.kind !== kind && edgeBetween(kind, f.kind));
}

/** All nodes of a kind as grid cards, sorted by ranking (ranked first) then name. */
export function nodeCards(graph: PlangsGraph, kind: NodeKind): PlangCard[] {
  const dims = facetKindsFor(kind);
  const cards: PlangCard[] = [];
  for (const key of nodesByKind(graph, kind)) {
    const p = parseKey(key);
    if (!p) continue;
    const data = getNode(graph, key)?.data;
    // `languishRanking` exists only on plang. `getPlang` returns undefined for
    // every other kind, which says that in the types rather than leaving a
    // `typeof` probe that silently reads nothing.
    const plang = getPlang(graph, key);
    const facets: Partial<Record<Dim, string[]>> = {};
    for (const d of dims) facets[d.dim] = neighborsByKind(graph, key, kind, d.kind);
    cards.push({
      key,
      slug: p.slug,
      name: data?.name ?? p.slug,
      thumb: thumbUrl(kind, p.slug),
      ranking: plang?.data.languishRanking,
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

/**
 * A node's relations, resolved for rendering: the graph decides what is related
 * and under which label, this decides what it looks like (name, link, order).
 */
function relationsFor(graph: PlangsGraph, key: string): RelGroup[] {
  return relatedGroups(graph, key).map(g => ({
    label: g.label,
    items: g.keys.map(k => ({ key: k, name: nodeName(graph, k), href: hrefForKey(k) })).sort((a, b) => a.name.localeCompare(b.name)),
  }));
}

export interface NodeDetail {
  key: string;
  kind: NodeKind;
  kindLabel: string;
  slug: string;
  name: string;
  data: NodeData;
  thumb?: string;
  relations: RelGroup[];
  /** Drawable trend series (D5). Empty for every node with no usable trend. */
  trends: SparkSeries[];
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
    name: attrs.data.name ?? p.slug,
    data: attrs.data,
    thumb: thumbUrl(p.kind, p.slug),
    relations: relationsFor(graph, key),
    trends: sparkSeriesOf(attrs.data),
  };
}
