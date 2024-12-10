import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+souffle", {
      name: "Soufflé",
      description:
        "Soufflé is an open source parallel logic programming language, influenced by Datalog. It includes both an interpreter and a compiler that targets parallel C++. Soufflé is designed for large-scale static analysis and enables rapid-prototyping for analysis problems using logic. It is used for building static analyzers, disassemblers, and tools for binary reverse engineering, and is noted for its high-performance in academic circles.",
      keywords: ["souffle", "soufflé"],
      extensions: [".dl"],
      releases: [{ version: "2.3", name: "Soufflé 2.3", date: "2023-05-01" }],
      extWikipediaPath: "Souffl%C3%A9_(programming_language)",
      extHomeURL: "https://souffle-lang.github.io/",
      created: "2016",
    })
    .relDialectOf.add("pl+datalog")
    .relInfluencedBy.add("pl+datalog")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+compiled", "para+declarative", "para+logic")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+analysis", "tag+compiler", "tag+interpreters")
    .relTypeSystems.add("tsys+static")
    .relWrittenWith.add("pl+c++");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
