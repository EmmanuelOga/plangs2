import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+solidity", {
    name: "Solidity",
    languishRanking: 55,
    websites: [
      { kind: "reddit", title: "Solidity on Reddit", href: "https://reddit.com/r/ethdev" },
      { kind: "wikipedia", title: "Solidity on Wikipedia", href: "https://en.wikipedia.org/wiki/Solidity" },
    ],
    stackovTags: ["solidity"],
    githubName: "Solidity",
    githubLangId: "237469032",
    githubColor: "#AA6746",
    githubPopular: false,
    githubType: "programming",
  });

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
