import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+t").merge({
    name: "T",
    websites: [
      { kind: "wikipedia", title: "T", href: "https://en.wikipedia.org/wiki/T_(programming_language)" },
      { kind: "wikipedia", title: "T", href: "https://en.wikipedia.org/wiki/T_programming_language" },
    ],
  });
}
