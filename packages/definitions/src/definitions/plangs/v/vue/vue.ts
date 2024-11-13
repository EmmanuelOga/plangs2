import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+vue", {
    name: "Vue",
    languishRanking: 20,
    websites: [
      { kind: "reddit", title: "Vue on Reddit", href: "https://reddit.com/r/vuejs" },
      { kind: "wikipedia", title: "Vue on Wikipedia", href: "https://en.wikipedia.org/wiki/Vue.js" },
    ],
    stackovTags: ["vue.js"],
    githubName: "Vue",
    githubLangId: "391",
    githubColor: "#41b883",
    githubPopular: false,
    githubType: "markup",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
