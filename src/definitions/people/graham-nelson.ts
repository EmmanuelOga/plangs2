import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+graham-nelson", "Graham Nelson", {
    websites: [{ title: "Graham Nelson", href: "https://en.wikipedia.org/wiki/Graham_Nelson", kind: "wikipedia" }],
  });

  /**/
}
