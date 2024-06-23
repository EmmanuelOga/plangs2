import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+sanjiva-weerawarana", "Sanjiva Weerawarana", {
    websites: [
      { title: "Sanjiva Weerawarana", href: "https://en.wikipedia.org/wiki/Sanjiva_Weerawarana", kind: "wikipedia" },
    ],
  });

  /**/
}
