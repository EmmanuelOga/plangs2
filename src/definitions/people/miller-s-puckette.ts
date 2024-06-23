import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+miller-s-puckette", "Miller S. Puckette", {
    websites: [
      { title: "Miller S. Puckette", href: "https://en.wikipedia.org/wiki/Miller_Puckette", kind: "wikipedia" },
    ],
  });

  /**/
}
