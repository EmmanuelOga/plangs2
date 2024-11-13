import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+bicep", {
    name: "Bicep",
    languishRanking: 80,
    websites: [{ kind: "reddit", title: "Bicep on Reddit", href: "https://reddit.com/r/AzureBicep" }],
    stackovTags: ["azure-bicep"],
    githubName: "Bicep",
    githubLangId: "321200902",
    githubColor: "#519aba",
    githubPopular: false,
    githubType: "programming",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
