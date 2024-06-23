import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+conor-mcbride", "Conor McBride", {
    websites: [{ title: "Conor McBride", href: "https://en.wikipedia.org/wiki/Conor_McBride", kind: "wikipedia" }],
  });

  /**/
}
