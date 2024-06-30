import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.typeSystemBuilder;

  lb.define("tsys+dependent", "Dependent", {
    websites: [
      { title: "Dependent Type System", href: "https://en.wikipedia.org/wiki/dependent_type", kind: "wikipedia" },
    ],
  });
}
