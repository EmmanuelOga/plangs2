import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+centrum-wiskunde", "Centrum Wiskunde", {
    websites: [
      {
        title: "Centrum Wiskunde & Informatica",
        href: "https://en.wikipedia.org/wiki/Centrum_Wiskunde_%26_Informatica",
        kind: "wikipedia",
      },
    ],
  });

  /**/
}
