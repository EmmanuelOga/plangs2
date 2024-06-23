import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+philip-wadler", "Philip Wadler", {
    websites: [{ title: "Philip Wadler", href: "https://en.wikipedia.org/wiki/Philip_Wadler", kind: "wikipedia" }],
  });

  /**/
}
