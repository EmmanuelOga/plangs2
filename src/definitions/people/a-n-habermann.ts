import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+a-n-habermann", "A. N. Habermann", {
    websites: [{ title: "A. N. Habermann", href: "https://en.wikipedia.org/wiki/Nico_Habermann", kind: "wikipedia" }],
  });

  /**/
}
