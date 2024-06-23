import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+cleve-moler", "Cleve Moler", {
    websites: [{ title: "Cleve Moler", href: "https://en.wikipedia.org/wiki/Cleve_Moler", kind: "wikipedia" }],
  });

  /**/
}
