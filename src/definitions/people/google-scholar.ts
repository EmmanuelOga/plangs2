import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+google-scholar", "Google scholar", {
    websites: [{ title: "Google scholar", href: "https://en.wikipedia.org/wiki/Google_scholar", kind: "wikipedia" }],
  });

  /**/
}
