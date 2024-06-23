import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+gerald-sussman", "Gerald Sussman", {
    websites: [{ title: "Gerald Sussman", href: "https://en.wikipedia.org/wiki/Gerald_Sussman", kind: "wikipedia" }],
  });

  /**/
}
