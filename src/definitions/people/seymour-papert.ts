import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+seymour-papert", "Seymour Papert", {
    websites: [{ title: "Seymour Papert", href: "https://en.wikipedia.org/wiki/Seymour_Papert", kind: "wikipedia" }],
  });

  /**/
}
