import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+andy-gavin", "Andy Gavin", {
    websites: [{ title: "Andy Gavin", href: "https://en.wikipedia.org/wiki/Andy_Gavin", kind: "wikipedia" }],
  });

  /**/
}
