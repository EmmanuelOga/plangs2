import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+benjamin-c-pierce", "Benjamin C. Pierce", {
    websites: [
      { title: "Benjamin C. Pierce", href: "https://en.wikipedia.org/wiki/Benjamin_C._Pierce", kind: "wikipedia" },
    ],
  });

  /**/
}
