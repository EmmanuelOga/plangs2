import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.typeSystemBuilder;

  lb.define("tsys+parametric", "Parametric", {
    websites: [
      {
        title: "Parametric Type System",
        href: "https://en.wikipedia.org/wiki/parametric_polymorphism",
        kind: "wikipedia",
      },
    ],
  });

  /**/
}
