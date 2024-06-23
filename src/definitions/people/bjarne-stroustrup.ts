import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+bjarne-stroustrup", "Bjarne Stroustrup", {
    websites: [
      { title: "Bjarne Stroustrup", href: "https://en.wikipedia.org/wiki/Bjarne_Stroustrup", kind: "wikipedia" },
    ],
  });

  /**/
}
