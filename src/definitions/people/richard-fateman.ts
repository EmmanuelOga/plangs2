import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+richard-fateman", "Richard Fateman", {
    websites: [{ title: "Richard Fateman", href: "https://en.wikipedia.org/wiki/Richard_Fateman", kind: "wikipedia" }],
  });

  /**/
}
