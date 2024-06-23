import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+butler-lampson", "Butler Lampson", {
    websites: [{ title: "Butler Lampson", href: "https://en.wikipedia.org/wiki/Butler_Lampson", kind: "wikipedia" }],
  });

  /**/
}
