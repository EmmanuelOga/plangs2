import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+gavin-wood", "Gavin Wood", {
    websites: [{ title: "Gavin Wood", href: "https://en.wikipedia.org/wiki/Gavin_Wood", kind: "wikipedia" }],
  });

  /**/
}
