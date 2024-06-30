import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlatform("platf+amiga").merge({
    name: "Amiga",
    websites: [
      { kind: "wikipedia", title: "AmigaOS", href: "https://en.wikipedia.org/wiki/AmigaOS" },
      { kind: "wikipedia", title: "Amiga", href: "https://en.wikipedia.org/wiki/Amiga" },
    ],
  });

  /**/
}
