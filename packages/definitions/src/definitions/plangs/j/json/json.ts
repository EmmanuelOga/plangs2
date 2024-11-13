import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+json", {
    name: "JSON",
    languishRanking: 27,
    websites: [{ kind: "wikipedia", title: "JSON on Wikipedia", href: "https://en.wikipedia.org/wiki/JSON" }],
    stackovTags: ["json"],
    githubName: "JSON",
    githubLangId: "174",
    githubColor: "#292929",
    githubPopular: false,
    githubType: "data",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
