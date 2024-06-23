import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+brian-kernighan", "Brian Kernighan", {
    websites: [{ title: "Brian Kernighan", href: "https://en.wikipedia.org/wiki/Brian_Kernighan", kind: "wikipedia" }],
  });

  /**/
}
