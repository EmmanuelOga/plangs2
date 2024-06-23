import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+paul-cockshott", "Paul Cockshott", {
    websites: [{ title: "Paul Cockshott", href: "https://en.wikipedia.org/wiki/Paul_Cockshott", kind: "wikipedia" }],
  });

  /**/
}
