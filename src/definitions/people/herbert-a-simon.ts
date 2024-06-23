import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+herbert-a-simon", "Herbert A. Simon", {
    websites: [
      { title: "Herbert A. Simon", href: "https://en.wikipedia.org/wiki/Herbert_A._Simon", kind: "wikipedia" },
    ],
  });

  /**/
}
