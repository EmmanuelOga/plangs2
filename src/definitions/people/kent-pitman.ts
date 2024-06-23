import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+kent-pitman", "Kent Pitman", {
    websites: [{ title: "Kent Pitman", href: "https://en.wikipedia.org/wiki/Kent_Pitman", kind: "wikipedia" }],
  });

  /**/
}
