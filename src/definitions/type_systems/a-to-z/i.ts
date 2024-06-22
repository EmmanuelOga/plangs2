import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.typeSystemBuilder;

  //-------------------------------------------------------------------------------

  lb.define("tsys+inferred", "Inferred", {
    websites: [
      { title: "${name} Type System", href: "https://en.wikipedia.org/wiki/type_inference", kind: "wikipedia" },
    ],
  });
}
