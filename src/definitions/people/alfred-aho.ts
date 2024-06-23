import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+alfred-aho", "Alfred Aho", {
    websites: [{ title: "Alfred Aho", href: "https://en.wikipedia.org/wiki/Alfred_Aho", kind: "wikipedia" }],
  });

  /**/
}
