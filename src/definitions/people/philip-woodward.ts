import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+philip-woodward", "Philip Woodward", {
    websites: [{ title: "Philip Woodward", href: "https://en.wikipedia.org/wiki/Philip_Woodward", kind: "wikipedia" }],
  });

  /**/
}
