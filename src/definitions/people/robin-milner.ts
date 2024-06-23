import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+robin-milner", "Robin Milner", {
    websites: [{ title: "Robin Milner", href: "https://en.wikipedia.org/wiki/Robin_Milner", kind: "wikipedia" }],
  });

  /**/
}
