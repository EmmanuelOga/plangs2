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

export function nodeName(graph: PlangsGraph, key: string): string {
  const n = getNode(graph, key);
  const name = n?.data?.name;
  return typeof name === "string" ? name : (parseKey(key)?.slug ?? key);
}

export function hrefForKey(key: string): string {
  const p = parseKey(key);
  if (!p) return "#";
  return p.kind === "plang" ? `/${p.slug}` : `/${p.kind}/${p.slug}`;
}

/** All plangs as grid cards, sorted by ranking (ranked first) then name. */
export function plangCards(graph: PlangsGraph): PlangCard[] {
  const cards: PlangCard[] = [];
  for (const key of nodesByKind(graph, "plang")) {
    const p = parseKey(key);
    if (!p) continue;
    const data = getNode(graph, key)?.data ?? {};
    cards.push({
      key,
      slug: p.slug,
      name: typeof data.name === "string" ? data.name : p.slug,
      thumb: thumbUrl("plang", p.slug),
      ranking: typeof data.languishRanking === "number" ? data.languishRanking : undefined,
      isTranspiler: data.isTranspiler === true,
      facets: {
        paradigms: outByEdge(graph, key, "plangRelParadigms"),
        tags: inByEdge(graph, key, "tagRelPlangs"),
        platforms: outByEdge(graph, key, "plangRelPlatforms"),
        typeSystems: outByEdge(graph, key, "plangRelTypeSystems"),
      },
    });
  }
  cards.sort((a, b) => {
    const ra = a.ranking ?? Number.POSITIVE_INFINITY;
    const rb = b.ranking ?? Number.POSITIVE_INFINITY;
    return ra !== rb ? ra - rb : a.name.localeCompare(b.name);
  });
  return cards;
}

export interface RelGroup {
  label: string;
  items: { key: string; name: string; href: string }[];
}

/** Grouped neighbor relations for a node's detail page. */
export function relationsFor(graph: PlangsGraph, key: string): RelGroup[] {
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
