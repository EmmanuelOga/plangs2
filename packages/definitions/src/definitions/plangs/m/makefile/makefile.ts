import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+makefile", {
    name: "Makefile",
    languishRanking: 38,
    websites: [{ kind: "wikipedia", title: "Makefile on Wikipedia", href: "https://en.wikipedia.org/wiki/Make_(software)" }],
    stackovTags: ["makefile"],
    githubName: "Makefile",
    githubLangId: "220",
    githubColor: "#427819",
    githubPopular: false,
    githubType: "programming",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
