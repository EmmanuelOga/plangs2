import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+randall-hyde", "Randall Hyde", {
    websites: [{ title: "Randall Hyde", href: "https://en.wikipedia.org/wiki/Randall_Hyde", kind: "wikipedia" }],
  });

  /**/
}
