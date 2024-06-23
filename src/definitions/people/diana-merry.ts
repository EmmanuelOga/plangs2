import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+diana-merry", "Diana Merry", {
    websites: [{ title: "Diana Merry", href: "https://en.wikipedia.org/wiki/Diana_Merry", kind: "wikipedia" }],
  });

  /**/
}
