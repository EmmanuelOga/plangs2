import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+elpi", {
      name: "ELPI",
      description:
        "Embeddable Lambda Prolog Interpreter implements a variant of λProlog enriched with Constraint Handling Rules and serves as both a higher-order logical framework and an implementation language for type systems and logic programs.",
      shortDesc: "An embeddable interpreter for a λProlog variant enriched with Constraint Handling Rules.",
      created: "2014-03",
      extGithubPath: "LPCIC/elpi",
      isTranspiler: false,
      keywords: ["constraint-handling-rules", "lambda-prolog"],
    })
    .relParadigms.add("para+declarative", "para+logic")
    .relTags.add("tag+languages", "tag+proofs");
}
