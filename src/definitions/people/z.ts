import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+Zoltan-Somogyi", "Zoltan Somogyi", []);
}
