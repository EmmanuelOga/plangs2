import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+karl-glazebrook", "Karl Glazebrook", {
    websites: [{ title: "Karl Glazebrook", href: "https://en.wikipedia.org/wiki/Karl_Glazebrook", kind: "wikipedia" }],
  });

  /**/
}
