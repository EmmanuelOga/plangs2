import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+ron-morrison", "Ron Morrison", {
    websites: [{ title: "Ron Morrison", href: "https://en.wikipedia.org/wiki/Ron_Morrison", kind: "wikipedia" }],
  });

  /**/
}
