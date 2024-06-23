import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+william-s-cleveland", "William S. Cleveland", {
    websites: [
      { title: "William S. Cleveland", href: "https://en.wikipedia.org/wiki/William_S._Cleveland", kind: "wikipedia" },
    ],
  });

  /**/
}
