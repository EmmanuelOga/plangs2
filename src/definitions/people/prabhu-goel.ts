import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+prabhu-goel", "Prabhu Goel", {
    websites: [{ title: "Prabhu Goel", href: "https://en.wikipedia.org/wiki/Prabhu_Goel", kind: "wikipedia" }],
  });

  /**/
}
