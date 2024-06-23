import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+viral-b-shah", "Viral B. Shah", {
    websites: [{ title: "Viral B. Shah", href: "https://en.wikipedia.org/wiki/Viral_B._Shah", kind: "wikipedia" }],
  });

  /**/
}
