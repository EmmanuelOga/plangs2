import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+brian-harvey", "Brian Harvey", {
    websites: [
      { title: "Brian Harvey", href: "https://en.wikipedia.org/wiki/Brian_Harvey_(lecturer)", kind: "wikipedia" },
    ],
  });

  /**/
}
