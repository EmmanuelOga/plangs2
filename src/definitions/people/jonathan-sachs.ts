import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+jonathan-sachs", "Jonathan Sachs", {
    websites: [{ title: "Jonathan Sachs", href: "https://en.wikipedia.org/wiki/Jonathan_Sachs", kind: "wikipedia" }],
  });

  /**/
}
