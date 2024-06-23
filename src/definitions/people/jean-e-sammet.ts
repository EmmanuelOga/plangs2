import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+jean-e-sammet", "Jean E. Sammet", {
    websites: [{ title: "Jean E. Sammet", href: "https://en.wikipedia.org/wiki/Jean_E._Sammet", kind: "wikipedia" }],
  });

  /**/
}
