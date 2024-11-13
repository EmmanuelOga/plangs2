import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+csv", {
    name: "CSV",
    languishRanking: 46,
    websites: [{ kind: "wikipedia", title: "CSV on Wikipedia", href: "https://en.wikipedia.org/wiki/Comma-separated_values" }],
    stackovTags: ["csv"],
    githubName: "CSV",
    githubLangId: "51",
    githubColor: "#237346",
    githubPopular: false,
    githubType: "data",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
