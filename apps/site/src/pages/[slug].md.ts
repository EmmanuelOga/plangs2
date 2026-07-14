import { nodesByKind } from "@plangs/graph";
import { parseKey } from "@plangs/schema";
import type { APIRoute } from "astro";
import { getGraph } from "../lib/graph";
import { nodeToMarkdown } from "../lib/markdown";
import { nodeDetail } from "../lib/view";

export function getStaticPaths() {
  const graph = getGraph();
  return nodesByKind(graph, "plang")
    .map(key => ({ key, slug: parseKey(key)?.slug }))
    .filter(x => x.slug)
    .map(x => ({ params: { slug: x.slug }, props: { key: x.key } }));
}

export const GET: APIRoute = ({ props }) => {
  const detail = nodeDetail(getGraph(), props.key as string);
  if (!detail) return new Response("Not found", { status: 404 });
  return new Response(nodeToMarkdown(detail), {
    headers: { "content-type": "text/markdown; charset=utf-8" },
  });
};
