import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+morgan-stanley", "Morgan Stanley", {
    websites: [{ title: "Morgan Stanley", href: "https://en.wikipedia.org/wiki/Morgan_Stanley", kind: "wikipedia" }],
  });

  /**/
}
