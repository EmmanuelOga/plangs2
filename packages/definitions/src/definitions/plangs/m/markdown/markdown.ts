import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+markdown", {
    name: "Markdown",
    languishRanking: 12,
    websites: [
      { kind: "reddit", title: "Markdown on Reddit", href: "https://reddit.com/r/Markdown" },
      { kind: "wikipedia", title: "Markdown on Wikipedia", href: "https://en.wikipedia.org/wiki/Markdown" },
    ],
    stackovTags: ["markdown"],
    githubName: "Markdown",
    githubLangId: "222",
    githubColor: "#083fa1",
    githubPopular: false,
    githubType: "prose",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
