import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+tim-sweeney", "Tim Sweeney", {
    websites: [{ title: "Tim Sweeney", href: "https://en.wikipedia.org/wiki/Tim_Sweeney", kind: "wikipedia" }],
  });

  /**/
}
