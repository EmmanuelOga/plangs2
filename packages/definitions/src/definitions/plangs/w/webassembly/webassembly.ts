import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+webassembly", {
    name: "WebAssembly",
    languishRanking: 93,
    websites: [
      { kind: "reddit", title: "WebAssembly on Reddit", href: "https://reddit.com/r/WebAssembly" },
      { kind: "wikipedia", title: "WebAssembly on Wikipedia", href: "https://en.wikipedia.org/wiki/WebAssembly" },
    ],
    stackovTags: ["webassembly"],
    githubName: "WebAssembly",
    githubLangId: "956556503",
    githubColor: "#04133b",
    githubPopular: false,
    githubType: "programming",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
