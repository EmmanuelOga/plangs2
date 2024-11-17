import type { PlangsGraph } from "@plangs/plangs";

  export function define(g: PlangsGraph) {
    g.nodes.pl.set("pl+casette", {"name":"Cassette","description":"Cassette is a simple language for personal programming. It's DIY, roll your own, batteries-not-included. It's for fun.","keywords":["cassette"],"extensions":[".cassette"],"year":2021,"releases":[{"version":"2.0.0","date":"2023-01-01"},{"version":"1.0.0","date":"2021-05-01"}],"isTranspiler":true,"isMainstream":false,"extHomeURL":"https://cassette-lang.com/"})
    .addCompilesTo(["pl+c"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+dataflow","paradigm+declarative","paradigm+dsl","paradigm+event-driven","paradigm+functional","paradigm+interpreted"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+audio-dev","tag+workflow"])
    .addTypeSystems(["tsys+dynamic"])
    .addWrittenIn(["pl+python"])

    // TOOLS

    

    // TOOL BUNDLES

    

    // LIBRARIES

    

    // APPS

    
  }
  