import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+vba", {
    name: "VBA",
    languishRanking: 29,
    websites: [
      { kind: "reddit", title: "VBA on Reddit", href: "https://reddit.com/r/vba" },
      { kind: "wikipedia", title: "VBA on Wikipedia", href: "https://en.wikipedia.org/wiki/Visual_Basic_for_Applications" },
    ],
    stackovTags: ["vba"],
    githubName: "VBA",
    githubLangId: "399230729",
    githubColor: "#867db1",
    githubPopular: false,
    githubType: "programming",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
