import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+plsql", {
    name: "PLSQL",
    languishRanking: 78,
    websites: [
      { kind: "reddit", title: "PLSQL on Reddit", href: "https://reddit.com/r/plsql" },
      { kind: "wikipedia", title: "PLSQL on Wikipedia", href: "https://en.wikipedia.org/wiki/PL/SQL" },
    ],
    stackovTags: ["plsql"],
    githubName: "PLSQL",
    githubLangId: "273",
    githubColor: "#dad8d8",
    githubPopular: false,
    githubType: "programming",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
