import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+jeff-bezanson", "Jeff Bezanson", {
    websites: [
      { title: "Jeff Bezanson", href: "https://en.wikipedia.org/wiki/Jeff_Bezanson_(programmer)", kind: "wikipedia" },
    ],
  });

  /**/
}
