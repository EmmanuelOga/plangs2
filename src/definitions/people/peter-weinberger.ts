import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+peter-weinberger", "Peter Weinberger", {
    websites: [
      { title: "Peter Weinberger", href: "https://en.wikipedia.org/wiki/Peter_J._Weinberger", kind: "wikipedia" },
    ],
  });

  /**/
}
