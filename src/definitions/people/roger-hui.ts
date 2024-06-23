import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+roger-hui", "Roger Hui", {
    websites: [{ title: "Roger Hui", href: "https://en.wikipedia.org/wiki/Roger_Hui", kind: "wikipedia" }],
  });

  /**/
}
