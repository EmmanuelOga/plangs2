import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+cliff-shaw", "Cliff Shaw", {
    websites: [{ title: "Cliff Shaw", href: "https://en.wikipedia.org/wiki/Cliff_Shaw", kind: "wikipedia" }],
  });

  /**/
}
