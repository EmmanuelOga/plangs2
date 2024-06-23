import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+alan-perlis", "Alan Perlis", {
    websites: [{ title: "Alan Perlis", href: "https://en.wikipedia.org/wiki/Alan_Perlis", kind: "wikipedia" }],
  });

  /**/
}
