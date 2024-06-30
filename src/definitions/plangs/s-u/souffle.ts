import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+souffle").merge({
    name: "Soufflé",
    websites: [
      {
        kind: "wikipedia",
        title: "Soufflé",
        href: "https://en.wikipedia.org/wiki/Souffl%C3%A9_(programming_language)",
      },
    ],
  });
}
