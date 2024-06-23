import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+norsk-data", "Norsk Data", {
    websites: [{ title: "Norsk Data", href: "https://en.wikipedia.org/wiki/Norsk_Data", kind: "wikipedia" }],
  });

  /**/
}
