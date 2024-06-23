import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+w-a-wulf", "W. A. Wulf", {
    websites: [{ title: "W. A. Wulf", href: "https://en.wikipedia.org/wiki/William_Wulf", kind: "wikipedia" }],
  });

  /**/
}
