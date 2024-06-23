import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+brendan-eich", "Brendan Eich", {
    websites: [{ title: "Brendan Eich", href: "https://en.wikipedia.org/wiki/Brendan_Eich", kind: "wikipedia" }],
  });

  /**/
}
