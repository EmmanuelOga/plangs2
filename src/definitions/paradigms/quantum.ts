import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  lb.define("para+quantum", "Quantum", {
    websites: [{ kind: "wikipedia", title: "Quantum", href: "https://en.wikipedia.org/wiki/Quantum_programming" }],
  });
}
