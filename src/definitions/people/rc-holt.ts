import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+rc-holt", "R.C. Holt", {
    websites: [{ title: "R.C. Holt", href: "https://en.wikipedia.org/wiki/Ric_Holt", kind: "wikipedia" }],
  });

  /**/
}
