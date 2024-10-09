import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+simula", {
      name: "Simula",
      description:
        "Simula is the name of two simulation programming languages, Simula I and Simula 67, developed in the 1960s at the Norwegian Computing Center in Oslo, by Ole-Johan Dahl and Kristen Nygaard. Syntactically, it is an approximate superset of ALGOL 60, and was also influenced by the design of Simscript.",
      keywords: ["simula"],
      websites: [
        { title: "Simula67", href: "http://www.simula67.info/", kind: "homepage" },
        { title: "Simula", href: "https://en.wikipedia.org/wiki/Simula", kind: "wikipedia" },
      ],
      firstAppeared: "1967-01-01",
      isTranspiler: false,
      isMainstream: false,
    })
    .addDialectOf(["pl+algol"])
    .addInfluencedBy(["pl+algol"])
    .addLicenses(["license+public-domain"])
    .addParadigms(["paradigm+multi", "paradigm+oop", "paradigm+procedural", "paradigm+simulation", "paradigm+structured"])
    .addPlatforms(["plat+cross", "plat+windows"])
    .addTags(["tag+app", "tag+compiler", "tag+framework", "tag+interpreter", "tag+modeling", "tag+viz"])
    .addTypeSystems(["tsys+nominal", "tsys+static"]);
}
