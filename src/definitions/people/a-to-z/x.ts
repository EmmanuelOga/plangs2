import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+xavier-leroy", "Xavier Leroy", {
    websites: [{ title: "Xavier Leroy", href: "https://en.wikipedia.org/wiki/Xavier_Leroy", kind: "wikipedia" }],
  });

  /**/
}
