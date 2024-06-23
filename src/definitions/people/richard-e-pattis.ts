import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+richard-e-pattis", "Richard E. Pattis", {
    websites: [
      { title: "Richard E. Pattis", href: "https://en.wikipedia.org/wiki/Richard_E._Pattis", kind: "wikipedia" },
    ],
  });

  /**/
}
