import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+robin-popplestone", "Robin Popplestone", {
    websites: [
      { title: "Robin Popplestone", href: "https://en.wikipedia.org/wiki/Robin_Popplestone", kind: "wikipedia" },
    ],
  });

  /**/
}
