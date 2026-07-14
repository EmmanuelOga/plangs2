import { nodesByKind } from "@plangs/graph";
import type { APIRoute } from "astro";
import { getGraph } from "../lib/graph";
import { plangCards } from "../lib/view";

const SITE = "https://plangs.page";

export const GET: APIRoute = () => {
  const graph = getGraph();
  const cards = plangCards(graph);
  const top = cards.filter(c => c.ranking).slice(0, 30);

  const body = `# plangs!

> A database of programming languages and their relationships (paradigms, type
> systems, platforms, licenses, influences, tooling). Static, open data.

## Dataset

- Full graph JSON: ${SITE}/data/plangs.json
- Per-node JSON: ${SITE}/data/nodes/{kind}/{slug}.json (e.g. /data/nodes/plang/nim.json)
- Compact facet index per grid: ${SITE}/data/facets/{kind}.json
- Every page has a clean markdown twin at the same path + ".md"
  (e.g. ${SITE}/nim.md).

Node keys are "prefix/slug" (pl/nim, para/oop, lic/mit). Pages live at
${SITE}/{slug} for languages and ${SITE}/{kind}/{slug} for everything else.

## URL grammar (constructable filters)

The language grid at ${SITE}/plangs accepts readable query params:

- paradigms=<slug>,<slug>   e.g. paradigms=functional,logic
- tags=<slug>,<slug>
- platforms=<slug>,<slug>
- mode=all|any              (default: any — match any selected value)

Example: ${SITE}/plangs?paradigms=functional&platforms=web&mode=all

## Kinds

${nodesByKind(graph, "plang").length} languages, plus tools, libraries, paradigms,
type systems, platforms, licenses, tags, communities and learning resources.

## Popular languages (by Languish ranking)

${top.map(c => `- [${c.name}](${SITE}/${c.slug}) — ${SITE}/${c.slug}.md`).join("\n")}
`;

  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
};
