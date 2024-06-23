import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+rich-hickey", "Rich Hickey", {
    websites: [{ title: "Rich Hickey", href: "https://en.wikipedia.org/wiki/Rich_Hickey", kind: "wikipedia" }],
  });

  /**/
}
