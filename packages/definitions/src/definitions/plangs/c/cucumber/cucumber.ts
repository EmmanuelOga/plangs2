import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+cucumber", {
    name: "Cucumber",
    languishRanking: 100,
    websites: [{ kind: "wikipedia", title: "Cucumber on Wikipedia", href: "https://en.wikipedia.org/wiki/Cucumber_(software)" }],
    stackovTags: ["cucumber", "gherkin"],
    githubName: "Gherkin",
    githubLangId: "76",
    githubColor: "#5B2063",
    githubPopular: false,
    githubType: "programming",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
