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
        "Bicep is a domain-specific language designed for deploying Azure resources, offering a more readable syntax and modular structure for managing infrastructure code.",
      keywords: ["azure", "bicep", "deployment", "infrastructure"],
      extensions: [".bicep"],
      isTranspiler: true,
      extRedditPath: "AzureBicep",
      extGithubPath: "Azure/bicep",
      extHomeURL: "https://github.com/Azure/bicep",
      created: "2020",
      shortDesc: "Bicep is a DSL for deploying Azure resources with a simplified syntax.",
      links: [{ url: "https://learn.microsoft.com/azure/azure-resource-manager/bicep/", title: "Microsoft Learn - Bicep Language" }],
      githubStars: 3300,
    })
    .relCompilesTo.add("pl+json", "pl+typescript")
    .relImplements.add("pl+json")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+declarative", "para+dsl")
    .relPlatforms.add("plat+cross");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
