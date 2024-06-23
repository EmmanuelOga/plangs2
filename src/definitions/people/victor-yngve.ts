import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+victor-yngve", "Victor Yngve", {
    websites: [{ title: "Victor Yngve", href: "https://en.wikipedia.org/wiki/Victor_Yngve", kind: "wikipedia" }],
  });

  /**/
}
