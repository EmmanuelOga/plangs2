import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+heinz-rutishauser", "Heinz Rutishauser", {
    websites: [
      { title: "Heinz Rutishauser", href: "https://en.wikipedia.org/wiki/Heinz_Rutishauser", kind: "wikipedia" },
    ],
  });

  /**/
}
