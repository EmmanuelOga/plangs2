import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+yukihiro-matsumoto", "Yukihiro Matsumoto", {
    websites: [
      { title: "Yukihiro Matsumoto", href: "https://en.wikipedia.org/wiki/Yukihiro_Matsumoto", kind: "wikipedia" },
    ],
  });

  /**/
}
