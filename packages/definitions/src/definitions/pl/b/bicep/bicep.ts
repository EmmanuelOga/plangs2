import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+bicep", {
      name: "Bicep",
      languishRanking: 80,
      stackovTags: ["azure-bicep"],
      githubName: "Bicep",
      githubLangId: "321200902",
      githubColor: "#519aba",
      githubPopular: false,
      githubType: "programming",
      description:
        "Bicep is a domain-specific language (DSL) for deploying Azure resources. It's designed to simplify the authoring and management of Azure infrastructure code by providing a more readable syntax and enabling modular resource deployment.",
      keywords: ["Azure", "Bicep", "Declarations", "Deployment", "Infrastructure as Code"],
      extensions: [".bicep"],
      isTranspiler: true,
      extRedditPath: "AzureBicep",
      extGithubPath: "Azure/bicep",
      extHomeURL: "https://docs.microsoft.com/en-us/azure/azure-resource-manager/bicep/",
      created: "2020",
    })
    .relCompilesTo.add(["pl+json", "pl+typescript"])
    .relLicense.add(["lic+mit"])
    .relParadigm.add(["para+declarative", "para+dsl"])
    .relPlatform.add(["plat+cross"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
