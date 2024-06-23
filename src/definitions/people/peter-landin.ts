import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+peter-landin", "Peter Landin", {
    websites: [{ title: "Peter Landin", href: "https://en.wikipedia.org/wiki/Peter_Landin", kind: "wikipedia" }],
  });

  /**/
}
