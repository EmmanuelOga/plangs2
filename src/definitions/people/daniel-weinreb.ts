import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+daniel-weinreb", "Daniel Weinreb", {
    websites: [{ title: "Daniel Weinreb", href: "https://en.wikipedia.org/wiki/Daniel_Weinreb", kind: "wikipedia" }],
  });

  /**/
}
