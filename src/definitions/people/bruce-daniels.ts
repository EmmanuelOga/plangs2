import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+bruce-daniels", "Bruce Daniels", {
    websites: [{ title: "Bruce Daniels", href: "https://en.wikipedia.org/wiki/Bruce_Daniels", kind: "wikipedia" }],
  });

  /**/
}
