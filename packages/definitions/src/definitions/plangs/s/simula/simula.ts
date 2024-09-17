import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+simula", {
      name: "Simula",
      description:
        "Simula is the name of two simulation programming languages, Simula I and Simula 67, developed in the 1960s at the Norwegian Computing Center in Oslo, by Ole-Johan Dahl and Kristen Nygaard. Syntactically, it is an approximate superset of ALGOL 60, and was also influenced by the design of Simscript.",
      firstAppeared: "1962-01-01",
      websites: [
        { href: "http://www.simula67.info/", title: "www.simula67.info", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Simula", title: "Simula", kind: "wikipedia" },
      ],
      images: [{ kind: "logo", title: "Simula", url: "/images/plangs/s/simula/logo.png" }],
    })
    .addDialectOf(["pl+algol"])
    .addInfluencedBy(["pl+algol"])
    .addParadigms(["paradigm+imperative", "paradigm+multi", "paradigm+oop", "paradigm+procedural", "paradigm+structured"])
    .addPlatforms(["plat+windows"])
    .addTags(["tag+app", "tag+compiler", "tag+framework", "tag+interpreter", "tag+modeling", "tag+ray-tracer", "tag+viz"])
    .addTypeSystems(["tsys+nominal", "tsys+static"]);
}
