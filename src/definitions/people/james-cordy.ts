import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+james-cordy", "James Cordy", {
    websites: [{ title: "James Cordy", href: "https://en.wikipedia.org/wiki/James_Cordy", kind: "wikipedia" }],
  });

  /**/
}
