import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+jayadev-misra", "Jayadev Misra", {
    websites: [{ title: "Jayadev Misra", href: "https://en.wikipedia.org/wiki/Jayadev_Misra", kind: "wikipedia" }],
  });

  /**/
}
