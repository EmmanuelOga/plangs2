import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+jean-ichbiah", "Jean Ichbiah", {
    websites: [{ title: "Jean Ichbiah", href: "https://en.wikipedia.org/wiki/Jean_Ichbiah", kind: "wikipedia" }],
  });

  /**/
}
