import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+array", {
    name: "Array",
    description:
      "In computer science, array programming refers to solutions that allow the application of operations to an entire set of values at once. Such solutions are commonly used in scientific and engineering settings.",
    extHomeURL: "https://en.wikipedia.org/wiki/Array_programming",
    keywords: ["array", "vector"],
  });
}
