import type { PlangsGraph } from "@plangs/plangs";

  export function define(g: PlangsGraph) {
    g.nodes.pl.set("pl+janet", {"name":"Janet","description":"Janet is a dynamic and functional programming language, ideal for system scripting and embedding in C/C++ programs. With built-in libraries for networking, threading, and more, Janet offers a powerful set of features with a minimalist setup, making it portable and easy to embed.","keywords":["dynamic","embedded","functional","janet"],"extensions":[".janet"],"year":2017,"releases":[{"version":"1.17.0","name":"Janet 1.17.0","date":"2023-06-15"}],"githubName":"Janet","githubLangId":"1028705371","githubColor":"#0886a5","githubPopular":false,"githubType":"programming","isMainstream":false,"extGithubPath":"janet-lang/janet","extRedditPath":"janetlang","extHomeURL":"https://janet-lang.org/"})
    .addInfluencedBy(["pl+scheme"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+extensible","paradigm+functional","paradigm+imperative","paradigm+scripting"])
    .addPlatforms(["plat+apple","plat+cross","plat+linux","plat+windows"])
    .addTags(["tag+cli","tag+embedded","tag+scripting"])
    .addTypeSystems(["tsys+dynamic"])
    .addWrittenIn(["pl+c"])

    // TOOLS

    

    // TOOL BUNDLES

    

    // LIBRARIES

    

    // APPS

    
  }
  