import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+plpgsql", {
    name: "PLpgSQL",
    languishRanking: 28,
    websites: [
      { kind: "reddit", title: "PLpgSQL on Reddit", href: "https://reddit.com/r/PostgreSQL" },
      { kind: "wikipedia", title: "PLpgSQL on Wikipedia", href: "https://en.wikipedia.org/wiki/pgSQL" },
    ],
    stackovTags: ["postgresql"],
    githubName: "PLpgSQL",
    githubLangId: "274",
    githubColor: "#336790",
    githubPopular: false,
    githubType: "programming",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
