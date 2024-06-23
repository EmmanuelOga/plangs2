import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+james-clark", "James Clark", {
    websites: [
      { title: "James Clark", href: "https://en.wikipedia.org/wiki/James_Clark_(programmer)", kind: "wikipedia" },
    ],
  });

  /**/
}
