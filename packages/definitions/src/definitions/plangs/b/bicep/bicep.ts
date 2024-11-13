import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+bicep", {
      name: "Bicep",
      languishRanking: 80,
      websites: [
        { kind: "reddit", title: "Bicep on Reddit", href: "https://reddit.com/r/AzureBicep" },
        { title: "Bicep on GitHub", href: "https://github.com/Azure/bicep", kind: "repository" },
        { title: "Bicep Documentation", href: "https://docs.microsoft.com/en-us/azure/azure-resource-manager/bicep/", kind: "apidocs" },
      ],
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
      year: 2020,
      isMainstream: false,
    })
    .addCompilesTo(["pl+json", "pl+typescript"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+declarative", "paradigm+dsl"])
    .addPlatforms(["plat+cross"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
