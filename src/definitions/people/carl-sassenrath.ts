import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+carl-sassenrath", "Carl Sassenrath", {
    websites: [{ title: "Carl Sassenrath", href: "https://en.wikipedia.org/wiki/Carl_Sassenrath", kind: "wikipedia" }],
  });

  /**/
}
