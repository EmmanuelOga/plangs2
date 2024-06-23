import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+mahmoud-samir-fayed", "Mahmoud Samir Fayed", {
    websites: [
      { title: "Mahmoud Samir Fayed", href: "https://en.wikipedia.org/wiki/Mahmoud_Samir_Fayed", kind: "wikipedia" },
    ],
  });

  /**/
}
