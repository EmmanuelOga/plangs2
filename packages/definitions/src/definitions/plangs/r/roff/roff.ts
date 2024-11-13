import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+roff", {
    name: "Roff",
    languishRanking: 92,
    websites: [
      { kind: "reddit", title: "Roff on Reddit", href: "https://reddit.com/r/groff" },
      { kind: "wikipedia", title: "Roff on Wikipedia", href: "https://en.wikipedia.org/wiki/groff_(software)" },
    ],
    stackovTags: ["groff"],
    githubName: "Roff",
    githubLangId: "141",
    githubColor: "#ecdebe",
    githubPopular: false,
    githubType: "markup",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
