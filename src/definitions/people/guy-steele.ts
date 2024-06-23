import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+guy-steele", "Guy Steele", {
    websites: [{ title: "Guy Steele", href: "https://en.wikipedia.org/wiki/Guy_Steele", kind: "wikipedia" }],
  });

  /**/
}
