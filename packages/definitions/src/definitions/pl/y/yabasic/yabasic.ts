import type { PlangsGraph } from "@plangs/plangs";

  export function define(g: PlangsGraph) {
    g.nodes.pl.set("pl+yabasic", {"name":"Yabasic","description":"Yabasic (Yet Another BASIC) is a free, open-source BASIC interpreter for Microsoft Windows and UNIX platforms. It is designed for simple programming tasks and offers features like basic control structures, subroutines, and the ability to create standalone executables. It supports line graphics, structured programming, and calls to libraries written in C.","keywords":["basic","interpreter","open-source","unix","windows","yabasic"],"extensions":[".yab"],"year":1995,"isMainstream":false,"releases":[{"version":"2.90.4","name":"Yabasic 2.90.4","date":"2023-09-17"}],"extGithubPath":"marcIhm/yabasic","extWikipediaPath":"Yabasic","extHomeURL":"http://www.yabasic.de/"})
    .addImplements(["pl+basic"])
    .addInfluencedBy(["pl+basic"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+interpreted","paradigm+procedural","paradigm+scripting"])
    .addPlatforms(["plat+linux","plat+windows"])
    .addTags(["tag+games","tag+interpreter","tag+scripting","tag+ui"])
    .addTypeSystems(["tsys+dynamic","tsys+weak"])
    .addWrittenIn(["pl+c"])

    // TOOLS

    

    // TOOL BUNDLES

    

    // LIBRARIES

    

    // APPS

    
  }
  