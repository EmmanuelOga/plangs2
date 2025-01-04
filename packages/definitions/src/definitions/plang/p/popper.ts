import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+popper", {
      name: "Popper",
      description:
        "An inductive logic programming system designed to solve machine learning tasks by inducing logic programs from data using a combination of search algorithms and background knowledge.",
      shortDesc:
        "An inductive logic programming system for solving machine learning tasks.",
      created: "2021",
      extGithubPath: "logic-and-learning-lab/Popper",
      isTranspiler: false,
      keywords: [
        "inductive-logic-programming",
        "logic-programs",
        "machine-learning",
      ],
    })
    .relParadigms.add("para+declarative", "para+logic");
}
