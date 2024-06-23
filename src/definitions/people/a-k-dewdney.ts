import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+a-k-dewdney", "A. K. Dewdney", {
    websites: [{ title: "A. K. Dewdney", href: "https://en.wikipedia.org/wiki/A._K._Dewdney", kind: "wikipedia" }],
  });

  /**/
}
