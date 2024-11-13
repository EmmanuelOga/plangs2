import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+cmake", {
    name: "CMake",
    languishRanking: 35,
    websites: [
      { kind: "reddit", title: "CMake on Reddit", href: "https://reddit.com/r/cmake" },
      { kind: "wikipedia", title: "CMake on Wikipedia", href: "https://en.wikipedia.org/wiki/CMake" },
    ],
    stackovTags: ["cmake"],
    githubName: "CMake",
    githubLangId: "47",
    githubColor: "#DA3434",
    githubPopular: false,
    githubType: "programming",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
