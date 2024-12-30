import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+numeric", {
    name: "Numeric Computation",
    description: "Software for performing numeric computations and algorithms.",
    extHomeURL: "https://en.wikipedia.org/wiki/Numeric_computation",
    keywords: ["numeric computation", "numerical analysis", "scientific computing"],
  });
}
