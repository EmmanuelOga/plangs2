import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+douglas-mcilroy", "Douglas McIlroy", {
    websites: [{ title: "Douglas McIlroy", href: "https://en.wikipedia.org/wiki/Douglas_McIlroy", kind: "wikipedia" }],
  });

  /**/
}
