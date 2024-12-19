import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+formulog", {
      name: "Formulog",
      description: "A language combining Datalog with support for SMT queries and first-order functional programming features.",
      shortDesc: "Datalog with support for SMT queries and first-order functional programming.",
      created: "2019-04",
      extGithubPath: "HarvardPL/formulog",
      extHomeURL: "https://harvardpl.github.io/formulog/",
      isTranspiler: false,
    })
    .relDialectOf.add("pl+datalog")
    .relInfluencedBy.add("pl+datalog")
    .relParadigms.add("para+declarative", "para+functional", "para+logic", "para+query")
    .relTags.add("tag+proofs");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
