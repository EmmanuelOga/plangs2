import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+mlton", {
      name: "MLton",
      description:
        "MLton is a whole-program optimizing compiler for the programming language Standard ML. MLton development began in 1997, and continues with a worldwide community of developers and users, who have helped to port MLton to several computing platforms. It is free and open-source software released under a Historical Permission Notice and Disclaimer. MLton was a participating organization in the 2013 Google Summer of Code.",
      keywords: ["mlton"],
      websites: [
        { title: "mlton.org", href: "http://mlton.org/", kind: "homepage" },
        { title: "MLton", href: "https://en.wikipedia.org/wiki/MLton", kind: "wikipedia" },
      ],
      extensions: [".sml"],
      year: 1997,
      isTranspiler: false,
      isMainstream: false,
    })
    .addDialectOf(["pl+ml", "pl+standard-ml"])
    .addImplements(["pl+standard-ml"])
    .addInfluencedBy(["pl+standard-ml"])
    .addParadigms(["paradigm+compiled", "paradigm+functional", "paradigm+imperative", "paradigm+multi"])
    .addPlatforms(["plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+compiler"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);
}
