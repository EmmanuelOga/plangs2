import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+joseph-henry-wegstein", "Joseph Henry Wegstein", {
    websites: [
      {
        title: "Joseph Henry Wegstein",
        href: "https://en.wikipedia.org/wiki/Joseph_Henry_Wegstein",
        kind: "wikipedia",
      },
    ],
  });

  /**/
}
