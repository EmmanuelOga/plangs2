import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+wally-feurzeig", "Wally Feurzeig", {
    websites: [{ title: "Wally Feurzeig", href: "https://en.wikipedia.org/wiki/Wally_Feurzeig", kind: "wikipedia" }],
  });

  /**/
}
