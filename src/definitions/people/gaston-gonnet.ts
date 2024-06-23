import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+gaston-gonnet", "Gaston Gonnet", {
    websites: [{ title: "Gaston Gonnet", href: "https://en.wikipedia.org/wiki/Gaston_Gonnet", kind: "wikipedia" }],
  });

  /**/
}
