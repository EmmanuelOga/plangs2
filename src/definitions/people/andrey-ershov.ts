import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+andrey-ershov", "Andrey Ershov", {
    websites: [{ title: "Andrey Ershov", href: "https://en.wikipedia.org/wiki/Andrey_Ershov", kind: "wikipedia" }],
  });

  /**/
}
