import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+tea").merge({
    name: "Tea",
    websites: [
      { kind: "wikipedia", title: "Tea", href: "https://en.wikipedia.org/wiki/Tea_(programming_language)" },
      { kind: "repository", title: "Tea", href: "https://github.com/jorgefranconunes/tea" },
    ],
  });
}
