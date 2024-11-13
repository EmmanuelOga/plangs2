import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+rmarkdown", {
    name: "RMarkdown",
    languishRanking: 79,
    stackovTags: ["r-markdown"],
    githubName: "RMarkdown",
    githubLangId: "313",
    githubColor: "#198ce7",
    githubPopular: false,
    githubType: "prose",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
