import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+parallel", {
    name: "Parallel",
    description:
      "Executes multiple tasks simultaneously to improve performance.",
    extHomeURL: "https://en.wikipedia.org/wiki/Parallel_programming_model",
    keywords: ["parallel programming"],
  });
}
