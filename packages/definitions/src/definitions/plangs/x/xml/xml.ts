import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+xml", {
    name: "XML",
    languishRanking: 32,
    websites: [
      { kind: "reddit", title: "XML on Reddit", href: "https://reddit.com/r/xml" },
      { kind: "wikipedia", title: "XML on Wikipedia", href: "https://en.wikipedia.org/wiki/XML" },
    ],
    stackovTags: ["xml"],
    githubName: "XML",
    githubLangId: "399",
    githubColor: "#0060ac",
    githubPopular: false,
    githubType: "data",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
