import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlatform("platf+playstation").merge({
    name: "PlayStation 3",
    websites: [
      { kind: "wikipedia", title: "PlayStation 2", href: "https://en.wikipedia.org/wiki/PlayStation_2" },
      { kind: "wikipedia", title: "PlayStation Portable", href: "https://en.wikipedia.org/wiki/PlayStation_Portable" },
      { kind: "wikipedia", title: "PlayStation 3", href: "https://en.wikipedia.org/wiki/PlayStation_3" },
    ],
  });
}
