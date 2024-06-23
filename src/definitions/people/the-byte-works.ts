import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+the-byte-works", "The Byte Works", {
    websites: [{ title: "The Byte Works", href: "https://en.wikipedia.org/wiki/The_Byte_Works", kind: "wikipedia" }],
  });

  /**/
}
