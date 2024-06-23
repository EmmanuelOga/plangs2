import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+rod-burstall", "Rod Burstall", {
    websites: [{ title: "Rod Burstall", href: "https://en.wikipedia.org/wiki/Rod_Burstall", kind: "wikipedia" }],
  });

  /**/
}
