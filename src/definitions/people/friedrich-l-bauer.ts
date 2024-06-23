import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+friedrich-l-bauer", "Friedrich L. Bauer", {
    websites: [
      { title: "Friedrich L. Bauer", href: "https://en.wikipedia.org/wiki/Friedrich_L._Bauer", kind: "wikipedia" },
    ],
  });

  /**/
}
