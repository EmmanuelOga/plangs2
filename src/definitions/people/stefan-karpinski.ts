import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+stefan-karpinski", "Stefan Karpinski", {
    websites: [
      { title: "Stefan Karpinski", href: "https://en.wikipedia.org/wiki/Stefan_Karpinski", kind: "wikipedia" },
    ],
  });

  /**/
}
