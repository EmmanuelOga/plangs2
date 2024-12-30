import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+symbolic", {
    name: "Symbolic",
    description: "Involves manipulating symbols rather than numeric data.",
    extHomeURL: "https://en.wikipedia.org/wiki/Symbolic_programming",
    keywords: ["symbolic"],
  });
}
