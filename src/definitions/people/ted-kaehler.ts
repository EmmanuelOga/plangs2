import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+ted-kaehler", "Ted Kaehler", {
    websites: [{ title: "Ted Kaehler", href: "https://en.wikipedia.org/wiki/Ted_Kaehler", kind: "wikipedia" }],
  });

  /**/
}
