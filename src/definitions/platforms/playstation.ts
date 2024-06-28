import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+playstation", "PlayStation 3", {
    websites: [
      { kind: "wikipedia", title: "PlayStation 4", href: "https://en.wikipedia.org/wiki/PlayStation_4" },
      { kind: "wikipedia", title: "PlayStation 5", href: "https://en.wikipedia.org/wiki/PlayStation_5" },
      { kind: "wikipedia", title: "PlayStation 2", href: "https://en.wikipedia.org/wiki/PlayStation_2" },
      { kind: "wikipedia", title: "PlayStation Portable", href: "https://en.wikipedia.org/wiki/PlayStation_Portable" },
      { kind: "wikipedia", title: "PlayStation 3", href: "https://en.wikipedia.org/wiki/PlayStation_3" },
    ],
  });
}
