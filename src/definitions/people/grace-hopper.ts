import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+grace-hopper", "Grace Hopper", {
    websites: [{ title: "Grace Hopper", href: "https://en.wikipedia.org/wiki/Grace_Hopper", kind: "wikipedia" }],
  });

  /**/
}
