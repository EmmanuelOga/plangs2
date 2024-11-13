import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+html", {
    name: "HTML",
    languishRanking: 7,
    websites: [
      { kind: "reddit", title: "HTML on Reddit", href: "https://reddit.com/r/HTML" },
      { kind: "wikipedia", title: "HTML on Wikipedia", href: "https://en.wikipedia.org/wiki/HTML" },
    ],
    stackovTags: ["html"],
    githubName: "HTML",
    githubLangId: "146",
    githubColor: "#e34c26",
    githubPopular: true,
    githubType: "markup",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
