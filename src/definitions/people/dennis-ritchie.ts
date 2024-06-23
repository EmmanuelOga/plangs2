import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+dennis-ritchie", "Dennis Ritchie", {
    websites: [{ title: "Dennis Ritchie", href: "https://en.wikipedia.org/wiki/Dennis_Ritchie", kind: "wikipedia" }],
  });

  /**/
}
