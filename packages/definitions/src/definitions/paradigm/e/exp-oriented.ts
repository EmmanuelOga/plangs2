import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+exp-oriented", {
    name: "Expression-Oriented",
    description: "Emphasizes the use of expressions over statements.",
    extHomeURL: "https://en.wikipedia.org/wiki/Expression-oriented_programming_language",
    keywords: ["exp-oriented", "expression-oriented"],
  });
}
