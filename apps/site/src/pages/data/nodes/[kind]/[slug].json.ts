import { nodesByKind } from "@plangs/graph";
import { ALL_KINDS, parseKey } from "@plangs/schema";
import type { APIRoute } from "astro";
import { getGraph } from "../../../../lib/graph";
import { urlKind } from "../../../../lib/url";
import { nodeDetail } from "../../../../lib/view";

/** Per-vertex JSON (PLAN §7.4): `/data/nodes/{kind}/{slug}.json`. */
export function getStaticPaths() {
  const graph = getGraph();
  const paths = [];
  for (const kind of ALL_KINDS) {
    if (kind === "post") continue;
    for (const key of nodesByKind(graph, kind)) {
      const slug = parseKey(key)?.slug;
      if (slug) paths.push({ params: { kind: urlKind(kind), slug }, props: { key } });
    }
  }
  return paths;
}

export const GET: APIRoute = ({ props }) => {
  const detail = nodeDetail(getGraph(), props.key as string);
  if (!detail) return new Response("Not found", { status: 404 });
  const body = {
    key: detail.key,
    kind: detail.kind,
    name: detail.name,
    url: `https://plangs.page${detail.kind === "plang" ? `/${detail.slug}` : `/${urlKind(detail.kind)}/${detail.slug}`}`,
    data: detail.data,
    relations: Object.fromEntries(detail.relations.map(g => [g.label, g.items.map(i => i.key)])),
  };
  return new Response(JSON.stringify(body), { headers: { "content-type": "application/json; charset=utf-8" } });
};
