import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+souffle", {
      name: "Soufflé",
      description:
        "Open source parallel logic programming language, influenced by Datalog, featuring both an interpreter and a compiler that targets parallel C++. Designed for large-scale static analysis, it allows for rapid prototyping in logic-based problem solving, and is used primarily for building static analyzers, disassemblers, and binary reverse engineering tools.",
      shortDesc: "Parallel logic programming language used for static analysis and reverse engineering, influenced by Datalog.",
      created: "2016",
      extensions: [".dl"],
      extGithubPath: "souffle-lang/souffle",
      extHomeURL: "https://souffle-lang.github.io/",
      extWikipediaPath: "Souffl%C3%A9_(programming_language)",
      githubStars: 937,
      isTranspiler: false,
      keywords: ["souffle"],
      releases: [{ version: "2.3", name: "Soufflé 2.3", date: "2023-05-01" }],
    })
    .relDialectOf.add("pl+datalog")
    .relInfluencedBy.add("pl+datalog")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+compiled", "para+declarative", "para+logic", "para+parallel")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+analysis", "tag+compiler", "tag+interpreters")
    .relTypeSystems.add("tsys+static")
    .relWrittenWith.add("pl+c++");
}
