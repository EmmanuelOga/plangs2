import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+jacob-t-schwartz", "Jacob T. Schwartz", {
    websites: [
      { title: "Jacob T. Schwartz", href: "https://en.wikipedia.org/wiki/Jacob_T._Schwartz", kind: "wikipedia" },
    ],
  });

  /**/
}
