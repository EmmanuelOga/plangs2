import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+cuda", {
    name: "Cuda",
    languishRanking: 56,
    websites: [
      { kind: "reddit", title: "Cuda on Reddit", href: "https://reddit.com/r/CUDA" },
      { kind: "wikipedia", title: "Cuda on Wikipedia", href: "https://en.wikipedia.org/wiki/CUDA" },
    ],
    stackovTags: ["cuda"],
    githubName: "Cuda",
    githubLangId: "77",
    githubColor: "#3A4E3A",
    githubPopular: false,
    githubType: "programming",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
