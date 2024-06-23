import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+jeffrey-snover", "Jeffrey Snover", {
    websites: [{ title: "Jeffrey Snover", href: "https://en.wikipedia.org/wiki/Jeffrey_Snover", kind: "wikipedia" }],
  });

  /**/
}
