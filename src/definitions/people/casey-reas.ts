import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+casey-reas", "Casey Reas", {
    websites: [{ title: "Casey Reas", href: "https://en.wikipedia.org/wiki/Casey_Reas", kind: "wikipedia" }],
  });

  /**/
}
