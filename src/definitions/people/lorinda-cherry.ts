import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+lorinda-cherry", "Lorinda Cherry", {
    websites: [{ title: "Lorinda Cherry", href: "https://en.wikipedia.org/wiki/Lorinda_Cherry", kind: "wikipedia" }],
  });

  /**/
}
