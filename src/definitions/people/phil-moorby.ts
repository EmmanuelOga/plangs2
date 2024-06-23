import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+phil-moorby", "Phil Moorby", {
    websites: [{ title: "Phil Moorby", href: "https://en.wikipedia.org/wiki/Phil_Moorby", kind: "wikipedia" }],
  });

  /**/
}
