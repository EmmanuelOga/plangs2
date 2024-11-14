import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+souffle", {
      name: "Soufflé",
      description:
        "Soufflé is an open source parallel logic programming language, influenced by Datalog. It includes both an interpreter and a compiler that targets parallel C++. Soufflé is designed for large-scale static analysis and enables rapid-prototyping for analysis problems using logic. It is used for building static analyzers, disassemblers, and tools for binary reverse engineering, and is noted for its high-performance in academic circles.",
      keywords: ["souffle", "soufflé"],
      websites: [
        { title: "Soufflé • A Datalog Synthesis Tool for Static Analysis", href: "https://souffle-lang.github.io/", kind: "homepage" },
        {
          title: "Soufflé (programming language) - Wikipedia",
          href: "https://en.wikipedia.org/wiki/Souffl%C3%A9_(programming_language)",
          kind: "wikipedia",
        },
      ],
      extensions: [".dl"],
      year: 2016,
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

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
