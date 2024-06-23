import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+tony-brooker", "Tony Brooker", {
    websites: [{ title: "Tony Brooker", href: "https://en.wikipedia.org/wiki/Tony_Brooker", kind: "wikipedia" }],
  });

  /**/
}
