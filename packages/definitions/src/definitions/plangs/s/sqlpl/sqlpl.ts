import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+sqlpl", {
    name: "SQLPL",
    languishRanking: 98,
    websites: [
      { kind: "reddit", title: "SQLPL on Reddit", href: "https://reddit.com/r/DB2" },
      { kind: "wikipedia", title: "SQLPL on Wikipedia", href: "https://en.wikipedia.org/wiki/SQL_PL" },
    ],
    stackovTags: ["db2"],
    githubName: "SQLPL",
    githubLangId: "334",
    githubColor: "#e38c00",
    githubPopular: false,
    githubType: "programming",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
