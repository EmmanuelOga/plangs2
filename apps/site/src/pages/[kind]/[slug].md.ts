import { nodesByKind } from "@plangs/graph";
import { ALL_KINDS, parseKey } from "@plangs/schema";
import type { APIRoute } from "astro";
import { getGraph } from "../../lib/graph";
import { nodeToMarkdown } from "../../lib/markdown";
import { nodeDetail, urlKind } from "../../lib/view";

export function getStaticPaths() {
  const graph = getGraph();
  const paths = [];
  for (const kind of ALL_KINDS) {
    if (kind === "plang" || kind === "post") continue;
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
  return new Response(nodeToMarkdown(detail), {
    headers: { "content-type": "text/markdown; charset=utf-8" },
  });
};
