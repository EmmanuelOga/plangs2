import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+konrad-zuse", "Konrad Zuse", {
    websites: [{ title: "Konrad Zuse", href: "https://en.wikipedia.org/wiki/Konrad_Zuse", kind: "wikipedia" }],
  });

  /**/
}
