import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+bob-bemer", "Bob Bemer", {
    websites: [{ title: "Bob Bemer", href: "https://en.wikipedia.org/wiki/Bob_Bemer", kind: "wikipedia" }],
  });

  /**/
}
