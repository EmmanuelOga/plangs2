import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+dockerfile", {
    name: "Dockerfile",
    languishRanking: 21,
    websites: [
      { kind: "reddit", title: "Dockerfile on Reddit", href: "https://reddit.com/r/docker" },
      { kind: "wikipedia", title: "Dockerfile on Wikipedia", href: "https://en.wikipedia.org/wiki/Docker_(software)" },
    ],
    stackovTags: ["docker"],
    githubName: "Dockerfile",
    githubLangId: "89",
    githubColor: "#384d54",
    githubPopular: false,
    githubType: "programming",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
