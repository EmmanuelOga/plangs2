import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+paul-hudak", "Paul Hudak", {
    websites: [{ title: "Paul Hudak", href: "https://en.wikipedia.org/wiki/Paul_Hudak", kind: "wikipedia" }],
  });

  /**/
}
