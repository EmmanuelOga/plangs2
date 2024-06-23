import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+robert-a-greenes", "Robert A. Greenes", {
    websites: [
      { title: "Robert A. Greenes", href: "https://en.wikipedia.org/wiki/Robert_A._Greenes", kind: "wikipedia" },
    ],
  });

  /**/
}
