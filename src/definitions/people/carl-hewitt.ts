import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+carl-hewitt", "Carl Hewitt", {
    websites: [{ title: "Carl Hewitt", href: "https://en.wikipedia.org/wiki/Carl_Hewitt", kind: "wikipedia" }],
  });

  /**/
}
