import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+niklaus-wirth", "Niklaus Wirth", {
    websites: [{ title: "Niklaus Wirth", href: "https://en.wikipedia.org/wiki/Niklaus_Wirth", kind: "wikipedia" }],
  });

  /**/
}
