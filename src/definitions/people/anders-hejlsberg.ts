import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+anders-hejlsberg", "Anders Hejlsberg", {
    websites: [
      { title: "Anders Hejlsberg", href: "https://en.wikipedia.org/wiki/Anders_Hejlsberg", kind: "wikipedia" },
    ],
  });

  /**/
}
