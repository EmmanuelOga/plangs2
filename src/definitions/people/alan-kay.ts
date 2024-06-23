import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+alan-kay", "Alan Kay", {
    websites: [{ title: "Alan Kay", href: "https://en.wikipedia.org/wiki/Alan_Kay", kind: "wikipedia" }],
  });

  /**/
}
