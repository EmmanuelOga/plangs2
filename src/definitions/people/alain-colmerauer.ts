import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+alain-colmerauer", "Alain Colmerauer", {
    websites: [
      { title: "Alain Colmerauer", href: "https://en.wikipedia.org/wiki/Alain_Colmerauer", kind: "wikipedia" },
    ],
  });

  /**/
}
