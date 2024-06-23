import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+larry-tesler", "Larry Tesler", {
    websites: [{ title: "Larry Tesler", href: "https://en.wikipedia.org/wiki/Larry_Tesler", kind: "wikipedia" }],
  });

  /**/
}
