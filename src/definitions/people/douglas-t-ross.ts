import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+douglas-t-ross", "Douglas T. Ross", {
    websites: [{ title: "Douglas T. Ross", href: "https://en.wikipedia.org/wiki/Douglas_T._Ross", kind: "wikipedia" }],
  });

  /**/
}
