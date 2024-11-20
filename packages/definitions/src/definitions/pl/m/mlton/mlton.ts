import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+mlton", {
      name: "MLton",
      description:
        "MLton is a whole-program optimizing compiler for the Standard ML programming language. MLton generates small executables with excellent runtime performance, utilizing untagged and unboxed native integers, reals, and words, unboxed native arrays, fast arbitrary-precision arithmetic based on GMP, multiple code generation, and garbage collection strategies. It provides a feature-rich Standard ML programming environment, full support for SML97, and a simple and fast C foreign function interface. MLton development began in 1997 and is free and open-source software. MLton participated in the 2013 Google Summer of Code.",
      keywords: ["MLton", "Standard ML", "compiler", "optimizing", "whole-program"],
      extensions: [".sml"],
      releases: [{ version: "20210117", name: "Stable Release", date: "2021-01-17" }],
      extWikipediaPath: "MLton",
      extHomeURL: "http://mlton.org/",
      created: "1997",
    })
    .addDialectOf(["pl+standard-ml"])
    .addImplements(["pl+standard-ml"])
    .addInfluencedBy(["pl+standard-ml"])
    .addLicenses(["license+dual"])
    .addParadigms(["paradigm+compiled", "paradigm+functional", "paradigm+imperative", "paradigm+multi"])
    .addPlatforms(["plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+compiler"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
