import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+robert-fourer", "Robert Fourer", {
    websites: [{ title: "Robert Fourer", href: "https://en.wikipedia.org/wiki/Robert_Fourer", kind: "wikipedia" }],
  });

  /**/
}
