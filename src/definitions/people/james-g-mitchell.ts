import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+james-g-mitchell", "James G. Mitchell", {
    websites: [
      { title: "James G. Mitchell", href: "https://en.wikipedia.org/wiki/James_G._Mitchell", kind: "wikipedia" },
    ],
  });

  /**/
}
