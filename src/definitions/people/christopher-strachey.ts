import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+christopher-strachey", "Christopher Strachey", {
    websites: [
      { title: "Christopher Strachey", href: "https://en.wikipedia.org/wiki/Christopher_Strachey", kind: "wikipedia" },
    ],
  });

  /**/
}
