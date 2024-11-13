import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+nginx", {
    name: "Nginx",
    languishRanking: 34,
    websites: [
      { kind: "reddit", title: "Nginx on Reddit", href: "https://reddit.com/r/nginx" },
      { kind: "wikipedia", title: "Nginx on Wikipedia", href: "https://en.wikipedia.org/wiki/Nginx" },
    ],
    stackovTags: ["nginx"],
    githubName: "Nginx",
    githubLangId: "248",
    githubColor: "#009639",
    githubPopular: false,
    githubType: "data",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
