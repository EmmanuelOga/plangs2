import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+alexander-repenning", "Alexander Repenning", {
    websites: [
      { title: "Alexander Repenning", href: "https://en.wikipedia.org/wiki/Alexander_Repenning", kind: "wikipedia" },
    ],
  });

  /**/
}
