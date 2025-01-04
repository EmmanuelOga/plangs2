import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+bicep", {
      name: "Bicep",
      description:
        "Domain-specific language designed for deploying Azure resources, offering a more readable syntax and modular structure for managing infrastructure code.",
      shortDesc: "DSL for deploying Azure resources with a simplified syntax.",
      created: "2020",
      extensions: [".bicep"],
      extGithubPath: "Azure/bicep",
      extHomeURL: "https://github.com/Azure/bicep",
      extRedditPath: "AzureBicep",
      githubColor: "#519aba",
      githubLangId: "321200902",
      githubName: "Bicep",
      githubPopular: false,
      githubStars: 3300,
      githubType: "programming",
      isTranspiler: true,
      keywords: ["azure", "bicep", "deployment", "infrastructure"],
      languishRanking: 80,
      links: [
        {
          url: "https://learn.microsoft.com/azure/azure-resource-manager/bicep/",
          title: "Bicep Language",
        },
      ],
      stackovTags: ["azure-bicep"],
    })
    .relCompilesTo.add("pl+json", "pl+typescript")
    .relImplements.add("pl+json")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+declarative", "para+dsl")
    .relPlatforms.add("plat+cross");
}
