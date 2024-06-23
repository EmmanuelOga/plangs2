import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+neil-pappalardo", "Neil Pappalardo", {
    websites: [{ title: "Neil Pappalardo", href: "https://en.wikipedia.org/wiki/Neil_Pappalardo", kind: "wikipedia" }],
  });

  /**/
}
