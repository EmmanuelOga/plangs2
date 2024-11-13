import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+objective-c", {
    name: "Objective-C",
    languishRanking: 33,
    websites: [
      { kind: "reddit", title: "Objective-C on Reddit", href: "https://reddit.com/r/ObjectiveC" },
      { kind: "wikipedia", title: "Objective-C on Wikipedia", href: "https://en.wikipedia.org/wiki/Objective-C" },
    ],
    stackovTags: ["objective-c"],
    githubName: "Objective-C",
    githubLangId: "257",
    githubColor: "#438eff",
    githubPopular: true,
    githubType: "programming",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
