import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+matlab", {
    name: "MATLAB",
    languishRanking: 47,
    websites: [
      { kind: "reddit", title: "MATLAB on Reddit", href: "https://reddit.com/r/matlab" },
      { kind: "wikipedia", title: "MATLAB on Wikipedia", href: "https://en.wikipedia.org/wiki/MATLAB" },
    ],
    stackovTags: ["matlab"],
    githubName: "MATLAB",
    githubLangId: "225",
    githubColor: "#e16737",
    githubPopular: false,
    githubType: "programming",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
