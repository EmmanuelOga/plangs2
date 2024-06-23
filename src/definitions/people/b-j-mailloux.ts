import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+b-j-mailloux", "B. J. Mailloux", {
    websites: [{ title: "B. J. Mailloux", href: "https://en.wikipedia.org/wiki/Barry_J._Mailloux", kind: "wikipedia" }],
  });

  /**/
}
