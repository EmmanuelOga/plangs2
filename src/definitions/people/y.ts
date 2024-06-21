import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  //-------------------------------------------------------------------------------

  lb.define("person+Yaron-Kashai", "Yaron Kashai", []);

  //-------------------------------------------------------------------------------

  lb.define("person+Yehuda-Katz", "Yehuda Katz", []);

  //-------------------------------------------------------------------------------

  lb.define("person+Yukihiro-Matsumoto", "Yukihiro Matsumoto", [
    {
      title: "Yukihiro Matsumoto",
      href: "https://en.wikipedia.org/wiki/Yukihiro_Matsumoto",
      kind: "wikipedia",
    },
  ]);
}
