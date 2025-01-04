import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+quantum", {
    name: "Quantum",
    description:
      "Deals with the development of algorithms for quantum computers.",
    extHomeURL: "https://en.wikipedia.org/wiki/Quantum_programming",
    keywords: ["quantum"],
  });
}
