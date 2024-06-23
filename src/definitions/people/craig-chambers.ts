import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+craig-chambers", "Craig Chambers", {
    websites: [{ title: "Craig Chambers", href: "https://en.wikipedia.org/wiki/Craig_Chambers", kind: "wikipedia" }],
  });

  /**/
}
