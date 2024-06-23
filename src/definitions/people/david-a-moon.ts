import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+david-a-moon", "David A. Moon", {
    websites: [{ title: "David A. Moon", href: "https://en.wikipedia.org/wiki/David_A._Moon", kind: "wikipedia" }],
  });

  /**/
}
