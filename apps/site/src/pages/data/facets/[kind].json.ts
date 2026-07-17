import { ALL_KINDS, parseKey } from "@plangs/schema";
import type { APIRoute } from "astro";
import { getGraph } from "../../../lib/graph";
import { urlKind } from "../../../lib/url";
import { facetKindsFor, nodeCards } from "../../../lib/view";

/** Grid kinds that get a compact facet index (PLAN §4.3 / §7.4). */
const GRID_KINDS = ALL_KINDS.filter(k => facetKindsFor(k).length > 0 && k !== "post");

export function getStaticPaths() {
  return GRID_KINDS.map(kind => ({ params: { kind: urlKind(kind) }, props: { kind } }));
}

/**
 * Compact columnar facet index: only what a grid UI needs (key, name, thumb,
 * ranking, facet memberships) — not the whole graph. Facet values are slugs, so
 * they line up 1:1 with the query-param filter grammar documented in llms.txt.
 */
export const GET: APIRoute = ({ props }) => {
  const graph = getGraph();
  const kind = props.kind;
  const cards = nodeCards(graph, kind);
  const slug = (key: string) => parseKey(key)?.slug ?? key;

  const body = {
    kind,
    count: cards.length,
    dimensions: facetKindsFor(kind).map(d => d.dim),
    nodes: cards.map(c => ({
      key: c.key,
      slug: c.slug,
      name: c.name,
      thumb: c.thumb,
      ranking: c.ranking,
      facets: Object.fromEntries(Object.entries(c.facets).map(([dim, keys]) => [dim, keys.map(slug)])),
    })),
  };
  return new Response(JSON.stringify(body), { headers: { "content-type": "application/json; charset=utf-8" } });
};
