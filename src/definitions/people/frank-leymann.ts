import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+frank-leymann", "Frank Leymann", {
    websites: [{ title: "Frank Leymann", href: "https://en.wikipedia.org/wiki/Frank_Leymann", kind: "wikipedia" }],
  });

  /**/
}
