import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+charles-katz", "Charles Katz", {
    websites: [{ title: "Charles Katz", href: "https://en.wikipedia.org/wiki/Charles_Katz", kind: "wikipedia" }],
  });

  /**/
}
