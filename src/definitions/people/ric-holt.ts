import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+ric-holt", "Ric Holt", {
    websites: [{ title: "Ric Holt", href: "https://en.wikipedia.org/wiki/Ric_Holt", kind: "wikipedia" }],
  });

  /**/
}
