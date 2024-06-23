import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+steven-pemberton", "Steven Pemberton", {
    websites: [
      { title: "Steven Pemberton", href: "https://en.wikipedia.org/wiki/Steven_Pemberton", kind: "wikipedia" },
    ],
  });

  /**/
}
