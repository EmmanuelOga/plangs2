import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+simon-peyton-jones", "Simon Peyton Jones", {
    websites: [
      { title: "Simon Peyton Jones", href: "https://en.wikipedia.org/wiki/Simon_Peyton_Jones", kind: "wikipedia" },
    ],
  });

  /**/
}
