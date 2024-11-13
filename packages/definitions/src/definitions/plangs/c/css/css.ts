import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+css", {
    name: "CSS",
    languishRanking: 15,
    websites: [
      { kind: "reddit", title: "CSS on Reddit", href: "https://reddit.com/r/CSS" },
      { kind: "wikipedia", title: "CSS on Wikipedia", href: "https://en.wikipedia.org/wiki/Cascading_Style_Sheets" },
    ],
    stackovTags: ["css"],
    githubName: "CSS",
    githubLangId: "50",
    githubColor: "#563d7c",
    githubPopular: true,
    githubType: "markup",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
