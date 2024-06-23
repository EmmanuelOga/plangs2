import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+free-pascal", "Free Pascal", {
    websites: [{ title: "Free Pascal", href: "https://en.wikipedia.org/wiki/Free_Pascal", kind: "wikipedia" }],
  });

  /**/
}
