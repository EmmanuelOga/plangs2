import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+motion-twin", "Motion Twin", {
    websites: [{ title: "Motion Twin", href: "https://en.wikipedia.org/wiki/Motion_Twin", kind: "wikipedia" }],
  });

  /**/
}
