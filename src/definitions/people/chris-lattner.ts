import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+chris-lattner", "Chris Lattner", {
    websites: [{ title: "Chris Lattner", href: "https://en.wikipedia.org/wiki/Chris_Lattner", kind: "wikipedia" }],
  });

  /**/
}
