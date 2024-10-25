import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+souffle", {
      name: "Soufflé",
      description:
        'Soufflé is an open source parallel logic programming language, influenced by Datalog. Soufflé includes both an interpreter and a compiler that targets parallel C++. Soufflé has been used to build static analyzers, disassemblers, and tools for binary reverse engineering. Soufflé is considered by academic researchers to be high-performance and "state of the art," and is often used in benchmarks in academic papers.',
      keywords: ["soufflé", "souffle"],
      websites: [
        { title: "Soufflé", href: "https://souffle-lang.github.io/", kind: "homepage" },
        { title: "Soufflé", href: "https://en.wikipedia.org/wiki/Souffl%C3%A9_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".dl"],
      year: 2016,
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "2.3", name: "Soufflé 2.3", date: "2023-05-01" }],
    })
    .addDialectOf(["pl+datalog"])
    .addInfluencedBy(["pl+datalog"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+compiled", "paradigm+declarative", "paradigm+logic"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+analysis", "tag+compiler", "tag+interpreter"])
    .addTypeSystems(["tsys+static"])
    .addWrittenIn(["pl+c++"]);
}
