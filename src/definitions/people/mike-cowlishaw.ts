import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+mike-cowlishaw", "Mike Cowlishaw", {
    websites: [{ title: "Mike Cowlishaw", href: "https://en.wikipedia.org/wiki/Mike_Cowlishaw", kind: "wikipedia" }],
  });

  /**/
}
