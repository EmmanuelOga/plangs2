import type { APIRoute } from "astro";
import { getGraph } from "../lib/graph";
import { plangCards } from "../lib/view";

const SITE = "https://plangs.page";

/** Markdown twin of the language grid (PLAN §7.2). */
export const GET: APIRoute = () => {
  const cards = plangCards(getGraph());
  const body = `# Programming languages

Source: ${SITE}/plangs — ${cards.length} languages.

${cards.map(c => `- [${c.name}](${SITE}/${c.slug})${c.ranking ? ` (#${c.ranking})` : ""}`).join("\n")}
`;
  return new Response(body, { headers: { "content-type": "text/markdown; charset=utf-8" } });
};
