import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+richard-p-gabriel", "Richard P. Gabriel", {
    websites: [
      { title: "Richard P. Gabriel", href: "https://en.wikipedia.org/wiki/Richard_P._Gabriel", kind: "wikipedia" },
    ],
  });

  /**/
}
