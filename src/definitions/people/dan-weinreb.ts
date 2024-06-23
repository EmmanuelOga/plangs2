import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+dan-weinreb", "Dan Weinreb", {
    websites: [{ title: "Dan Weinreb", href: "https://en.wikipedia.org/wiki/Dan_Weinreb", kind: "wikipedia" }],
  });

  /**/
}
