import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+valentin-turchin", "Valentin Turchin", {
    websites: [
      { title: "Valentin Turchin", href: "https://en.wikipedia.org/wiki/Valentin_Turchin", kind: "wikipedia" },
    ],
  });

  /**/
}
