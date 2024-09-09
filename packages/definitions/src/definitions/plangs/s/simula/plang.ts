import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
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
    .addParadigms(["para+imperative", "para+multi", "para+oop", "para+procedural", "para+structured"])
    .addPlatforms(["platf+windows"])
    .addTypeSystems(["tsys+nominal", "tsys+static"]);
}
