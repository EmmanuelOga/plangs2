import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+robert-griesemer", "Robert Griesemer", {
    websites: [
      { title: "Robert Griesemer", href: "https://en.wikipedia.org/wiki/Robert_Griesemer", kind: "wikipedia" },
    ],
  });

  /**/
}
