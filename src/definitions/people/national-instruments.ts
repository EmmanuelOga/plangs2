import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+national-instruments", "National Instruments", {
    websites: [
      { title: "National Instruments", href: "https://en.wikipedia.org/wiki/National_Instruments", kind: "wikipedia" },
    ],
  });

  /**/
}
