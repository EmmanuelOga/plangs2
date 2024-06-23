import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+luca-cardelli", "Luca Cardelli", {
    websites: [{ title: "Luca Cardelli", href: "https://en.wikipedia.org/wiki/Luca_Cardelli", kind: "wikipedia" }],
  });

  /**/
}
