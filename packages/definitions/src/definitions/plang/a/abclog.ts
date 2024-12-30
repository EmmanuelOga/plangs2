import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+abclog", {
      name: "AbcDatalog",
      description:
        "A lightweight Datalog engine designed for educational and research purposes, providing an intuitive platform for experimentation with logic programming.",
      shortDesc: "Easy Datalog for research & pedagogy.",
      created: "2021",
      extGithubPath: "HarvardPL/AbcDatalog",
      extHomeURL: "https://harvardpl.github.io/AbcDatalog/",
      isTranspiler: false,
      keywords: ["datalog", "logic programming", "pedagogy", "research"],
    })
    .relDialectOf.add("pl+datalog")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+declarative", "para+logic")
    .relPlatforms.add("plat+java")
    .relTags.add("tag+edu", "tag+proofs")
    .relWrittenWith.add("pl+java");
}
