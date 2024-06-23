import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+naughty-dog", "Naughty Dog", {
    websites: [{ title: "Naughty Dog", href: "https://en.wikipedia.org/wiki/Naughty_Dog", kind: "wikipedia" }],
  });

  /**/
}
