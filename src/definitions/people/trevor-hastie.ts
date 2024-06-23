import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+trevor-hastie", "Trevor Hastie", {
    websites: [{ title: "Trevor Hastie", href: "https://en.wikipedia.org/wiki/Trevor_Hastie", kind: "wikipedia" }],
  });

  /**/
}
