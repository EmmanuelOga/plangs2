import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+hermann-bottenbruch", "Hermann Bottenbruch", {
    websites: [
      { title: "Hermann Bottenbruch", href: "https://en.wikipedia.org/wiki/Hermann_Bottenbruch", kind: "wikipedia" },
    ],
  });

  /**/
}
