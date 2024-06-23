import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+manuel-serrano", "Manuel Serrano", {
    websites: [{ title: "Manuel Serrano", href: "https://en.wikipedia.org/wiki/Manuel_Serrano", kind: "wikipedia" }],
  });

  /**/
}
