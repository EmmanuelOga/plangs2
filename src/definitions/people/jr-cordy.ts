import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+jr-cordy", "J.R. Cordy", {
    websites: [{ title: "J.R. Cordy", href: "https://en.wikipedia.org/wiki/James_Cordy", kind: "wikipedia" }],
  });

  /**/
}
