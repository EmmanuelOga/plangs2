import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+brad-cox", "Brad Cox", {
    websites: [{ title: "Brad Cox", href: "https://en.wikipedia.org/wiki/Brad_Cox", kind: "wikipedia" }],
  });

  /**/
}
