import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+solidity", {
      name: "Solidity",
      languishRanking: 55,
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
      releases: [{ version: "0.8.28", name: "Stable release", date: "2024-10-09" }],
      extWikipediaPath: "Solidity",
      extRedditPath: "ethdev",
      extHomeURL: "https://soliditylang.org",
      created: "2014",
    })
    .relLicenses.add("lic+gnu-gpl")
    .relParadigms.add("para+imperative")
    .relTypeSystems.add("tsys+static");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
