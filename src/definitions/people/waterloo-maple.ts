import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+waterloo-maple", "Waterloo Maple", {
    websites: [{ title: "Waterloo Maple", href: "https://en.wikipedia.org/wiki/Waterloo_Maple", kind: "wikipedia" }],
  });

  /**/
}
