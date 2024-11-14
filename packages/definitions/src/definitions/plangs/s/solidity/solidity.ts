import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+solidity", {
      name: "Solidity",
      languishRanking: 55,
      websites: [
        { title: "Solidity - Wikipedia", href: "https://en.wikipedia.org/wiki/Solidity", kind: "wikipedia" },
        { title: "Solidity Language Official Site", href: "https://soliditylang.org", kind: "homepage" },
        { title: "Solidity on Reddit", href: "https://reddit.com/r/ethdev", kind: "reddit" },
      ],
      stackovTags: ["solidity"],
      githubName: "Solidity",
      githubLangId: "237469032",
      githubColor: "#AA6746",
      githubPopular: false,
      githubType: "programming",
      description:
        "Solidity is a statically typed programming language designed for developing smart contracts that run on the Ethereum Virtual Machine (EVM) or compatible virtual machines, influenced by languages such as JavaScript, C++, and Python.",
      keywords: ["EVM", "Ethereum", "Solidity", "blockchain", "smart contracts"],
      extensions: [".sol"],
      year: 2014,
      isMainstream: true,
      releases: [{ version: "0.8.28", name: "Stable release", date: "2024-10-09" }],
    })
    .addLicenses(["license+gnu-gpl"])
    .addParadigms(["paradigm+imperative"])
    .addTypeSystems(["tsys+static"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
