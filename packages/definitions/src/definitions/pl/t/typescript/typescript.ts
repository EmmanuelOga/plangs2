import type { PlangsGraph } from "@plangs/plangs";

  export function define(g: PlangsGraph) {
    g.nodes.pl.set("pl+typescript", {"name":"TypeScript","description":"TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. Developed by Microsoft, TypeScript is a superset of JavaScript that compiles to clean JavaScript output and is geared towards the development of large applications.","keywords":["javascript","static","superset","ts","typescript"],"extensions":[".cts",".mts",".ts",".tsx"],"year":2012,"isTranspiler":true,"isMainstream":true,"releases":[{"version":"5.0","name":"TypeScript 5.0","date":"2023-03-16"},{"version":"5.2","name":"TypeScript 5.2","date":"2023-08-01"},{"version":"5.6.3","name":"TypeScript 5.6.3","date":"2024-09-09"}],"stackovTags":["typescript"],"githubName":"TypeScript","languishRanking":2,"githubLangId":"378","githubColor":"#3178c6","githubPopular":true,"githubType":"programming","extWikipediaPath":"TypeScript","extRedditPath":"typescript","extGithubPath":"microsoft/TypeScript","extHomeURL":"https://www.typescriptlang.org/"})
    .addCompilesTo(["pl+javascript"])
    .addInfluencedBy(["pl+actionscript","pl+c-sharp","pl+f-sharp","pl+java","pl+javascript"])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+functional","paradigm+imperative","paradigm+multi","paradigm+oop"])
    .addPlatforms(["plat+cross","plat+nodejs"])
    .addTags(["tag+compiler","tag+framework","tag+scripting"])
    .addTypeSystems(["tsys+duck","tsys+gradual","tsys+optional","tsys+strong","tsys+structural"])
    .addWrittenIn(["pl+typescript"])

    // TOOLS

    

    // TOOL BUNDLES

    

    // LIBRARIES

    

    // APPS

    
  }
  