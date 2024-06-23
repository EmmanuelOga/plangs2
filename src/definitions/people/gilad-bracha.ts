import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+gilad-bracha", "Gilad Bracha", {
    websites: [{ title: "Gilad Bracha", href: "https://en.wikipedia.org/wiki/Gilad_Bracha", kind: "wikipedia" }],
  });

  /**/
}
