import type { PlangsGraph } from "@plangs/plangs";

  export function define(g: PlangsGraph) {
    g.nodes.pl.set("pl+pkl", {"name":"PKL","description":"PKL is a language designed to handle configurable data definitions with ease, offering a robust configuration format that can generate output in multiple formats like JSON, YAML, and more. It supports embedded configurations in applications like Java, Kotlin, Swift, and Go, and provides IDE integrations to facilitate ease of use for developers.","keywords":["pkl"],"extensions":[".pkl"],"year":2021,"releases":[{"version":"1.0.0","name":"PKL 1.0.0","date":"2021-06-01"}],"githubName":"Pkl","githubLangId":"288822799","githubColor":"#6b9543","githubPopular":false,"githubType":"programming","isTranspiler":true,"isMainstream":false,"extWikipediaPath":"PKL_(programming_language)","extHomeURL":"https://pkl-lang.org/"})
    .addCompilesTo(["pl+json","pl+yaml"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+data-driven","paradigm+data-exchange","paradigm+declarative","paradigm+functional","paradigm+multi","paradigm+scripting","paradigm+validation"])
    .addPlatforms(["plat+cross","plat+linux","plat+windows"])
    .addTags(["tag+automation","tag+interpreter","tag+scripting"])
    .addTypeSystems(["tsys+dynamic","tsys+strong"])
    .addWrittenIn(["pl+python"])

    // TOOLS

    

    // TOOL BUNDLES

    

    // LIBRARIES

    

    // APPS

    
  }
  