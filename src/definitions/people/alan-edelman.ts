import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+alan-edelman", "Alan Edelman", {
    websites: [{ title: "Alan Edelman", href: "https://en.wikipedia.org/wiki/Alan_Edelman", kind: "wikipedia" }],
  });

  /**/
}
