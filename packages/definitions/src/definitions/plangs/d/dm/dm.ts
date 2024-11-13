import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+dm", {
    name: "DM",
    languishRanking: 64,
    websites: [
      { kind: "reddit", title: "DM on Reddit", href: "https://reddit.com/r/BYOND" },
      { kind: "wikipedia", title: "DM on Wikipedia", href: "https://en.wikipedia.org/wiki/Space_Station_13" },
    ],
    githubName: "DM",
    githubLangId: "83",
    githubColor: "#447265",
    githubPopular: true,
    githubType: "programming",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
