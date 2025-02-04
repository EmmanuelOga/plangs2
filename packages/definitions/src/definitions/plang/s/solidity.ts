import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+solidity", {
      name: "Solidity",
      description:
        "Statically typed programming language designed for developing smart contracts that run on the Ethereum Virtual Machine (EVM) or compatible virtual machines, influenced by languages such as JavaScript, C++, and Python.",
      shortDesc: "Statically typed language for smart contracts on the EVM.",
      created: "2014",
      extensions: [".sol"],
      extGithubPath: "ethereum/solidity",
      extRedditPath: "ethdev",
      extWikipediaPath: "Solidity",
      githubColor: "#AA6746",
      githubLangId: "237469032",
      githubName: "Solidity",
      githubPopular: false,
      githubStars: 23500,
      githubType: "programming",
      isTranspiler: false,
      keywords: [
        "blockchain",
        "ethereum",
        "evm",
        "smart contracts",
        "solidity",
      ],
      languishRanking: 56,
      releases: [
        { version: "0.8.28", name: "Stable release", date: "2024-10-09" },
      ],
      stackovTags: ["solidity"],
    })
    .relInfluencedBy.add("pl+c++", "pl+javascript", "pl+python")
    .relLicenses.add("lic+gnu-gpl")
    .relParadigms.add("para+imperative")
    .relTypeSystems.add("tsys+static");
}
