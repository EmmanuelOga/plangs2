import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+klaus-samelson", "Klaus Samelson", {
    websites: [{ title: "Klaus Samelson", href: "https://en.wikipedia.org/wiki/Klaus_Samelson", kind: "wikipedia" }],
  });

  /**/
}
