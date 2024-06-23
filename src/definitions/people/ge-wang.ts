import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+ge-wang", "Ge Wang", {
    websites: [{ title: "Ge Wang", href: "https://en.wikipedia.org/wiki/Ge_Wang", kind: "wikipedia" }],
  });

  /**/
}
