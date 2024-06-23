import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+gary-grossman", "Gary Grossman", {
    websites: [{ title: "Gary Grossman", href: "https://en.wikipedia.org/wiki/Gary_Grossman", kind: "wikipedia" }],
  });

  /**/
}
