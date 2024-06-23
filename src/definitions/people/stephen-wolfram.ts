import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+stephen-wolfram", "Stephen Wolfram", {
    websites: [{ title: "Stephen Wolfram", href: "https://en.wikipedia.org/wiki/Stephen_Wolfram", kind: "wikipedia" }],
  });

  /**/
}
