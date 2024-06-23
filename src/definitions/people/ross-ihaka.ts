import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+ross-ihaka", "Ross Ihaka", {
    websites: [{ title: "Ross Ihaka", href: "https://en.wikipedia.org/wiki/Ross_Ihaka", kind: "wikipedia" }],
  });

  /**/
}
