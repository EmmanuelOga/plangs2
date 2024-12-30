import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+constraint", {
    name: "Constraint",
    description: "Users declaratively state the constraints on the feasible solutions for a set of decision variables.",
    extHomeURL: "https://en.wikipedia.org/wiki/Constraint_programming",
    keywords: ["constraint"],
  });
}
