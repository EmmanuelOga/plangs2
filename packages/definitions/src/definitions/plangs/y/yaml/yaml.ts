import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+yaml", {
    name: "YAML",
    languishRanking: 59,
    websites: [
      { kind: "reddit", title: "YAML on Reddit", href: "https://reddit.com/r/yaml" },
      { kind: "wikipedia", title: "YAML on Wikipedia", href: "https://en.wikipedia.org/wiki/YAML" },
    ],
    stackovTags: ["yaml"],
    githubName: "YAML",
    githubLangId: "407",
    githubColor: "#cb171e",
    githubPopular: false,
    githubType: "data",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
