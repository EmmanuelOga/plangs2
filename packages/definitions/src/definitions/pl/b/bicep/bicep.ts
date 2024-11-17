import type { PlangsGraph } from "@plangs/plangs";

  export function define(g: PlangsGraph) {
    g.nodes.pl.set("pl+bicep", {"name":"Bicep","languishRanking":80,"stackovTags":["azure-bicep"],"githubName":"Bicep","githubLangId":"321200902","githubColor":"#519aba","githubPopular":false,"githubType":"programming","description":"Bicep is a domain-specific language (DSL) for deploying Azure resources. It's designed to simplify the authoring and management of Azure infrastructure code by providing a more readable syntax and enabling modular resource deployment.","keywords":["Azure","Bicep","Declarations","Deployment","Infrastructure as Code"],"extensions":[".bicep"],"year":2020,"isMainstream":false,"isTranspiler":true,"extRedditPath":"AzureBicep","extGithubPath":"Azure/bicep","extHomeURL":"https://docs.microsoft.com/en-us/azure/azure-resource-manager/bicep/"})
    .addCompilesTo(["pl+json","pl+typescript"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+declarative","paradigm+dsl"])
    .addPlatforms(["plat+cross"])

    // TOOLS

    

    // TOOL BUNDLES

    

    // LIBRARIES

    

    // APPS

    
  }
  