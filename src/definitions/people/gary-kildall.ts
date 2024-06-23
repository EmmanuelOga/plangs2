import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+gary-kildall", "Gary Kildall", {
    websites: [{ title: "Gary Kildall", href: "https://en.wikipedia.org/wiki/Gary_Kildall", kind: "wikipedia" }],
  });

  /**/
}
