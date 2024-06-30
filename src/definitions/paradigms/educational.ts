import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  lb.define("para+educational", "educational", {
    websites: [
      {
        kind: "wikipedia",
        title: "educational",
        href: "https://en.wikipedia.org/wiki/Educational_programming_language",
      },
      {
        kind: "wikipedia",
        title: "educational",
        href: "https://en.wikipedia.org/wiki/List_of_educational_programming_languages",
      },
    ],
  });
}
