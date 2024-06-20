import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const tb = g.typeSystemBuilder;

  tb.define("tsys+affine", "Affine", [
    {
      title: "${name} Type System",
      href: "https://en.wikipedia.org/wiki/affine_type_system",
      kind: "wikipedia",
    },
  ]);
}
