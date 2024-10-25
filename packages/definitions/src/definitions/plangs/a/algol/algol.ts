import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+algol", {
      name: "ALGOL",
      description:
        'ALGOL (/ˈælɡɒl, -ɡɔːl/; short for "Algorithmic Language") is a family of imperative computer programming languages originally developed in 1958. ALGOL heavily influenced many other languages and was the standard method for algorithm description used by the Association for Computing Machinery (ACM) in textbooks and academic sources for more than thirty years.',
      keywords: ["algol"],
      websites: [{ title: "ALGOL", href: "https://en.wikipedia.org/wiki/ALGOL", kind: "wikipedia" }],
      extensions: [".algol"],
      year: 1958,
      isTranspiler: false,
      isMainstream: false,
      releases: [
        { version: "ALGOL 58", name: "ALGOL 58", date: "1958-01-01" },
        { version: "ALGOL 60", name: "ALGOL 60", date: "1960-01-01" },
        { version: "ALGOL 68", name: "ALGOL 68", date: "1968-01-01" },
      ],
    })
    .addParadigms(["paradigm+imperative", "paradigm+procedural", "paradigm+structured"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+app", "tag+compiler", "tag+editor", "tag+interpreter"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);
}
