import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+bruce-arden", "Bruce Arden", {
    websites: [{ title: "Bruce Arden", href: "https://en.wikipedia.org/wiki/Bruce_Arden", kind: "wikipedia" }],
  });

  /**/
}
