import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+remington-rand", "Remington Rand", {
    websites: [{ title: "Remington Rand", href: "https://en.wikipedia.org/wiki/Remington_Rand", kind: "wikipedia" }],
  });

  /**/
}
