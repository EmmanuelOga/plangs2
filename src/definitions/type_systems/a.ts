import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.typeSystemBuilder;

  //-------------------------------------------------------------------------------

  lb.define("tsys+affine", "Affine", [
    { title: "${name} Type System", href: "https://en.wikipedia.org/wiki/affine_type_system", kind: "wikipedia" },
  ]);
}
