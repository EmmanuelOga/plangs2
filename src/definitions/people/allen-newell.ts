import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+allen-newell", "Allen Newell", {
    websites: [{ title: "Allen Newell", href: "https://en.wikipedia.org/wiki/Allen_Newell", kind: "wikipedia" }],
  });

  /**/
}
