import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+amiga", {
    name: "Amiga",
    websites: [
      { kind: "wikipedia", title: "AmigaOS", href: "https://en.wikipedia.org/wiki/AmigaOS" },
      { kind: "wikipedia", title: "Amiga", href: "https://en.wikipedia.org/wiki/Amiga" },
    ],
  });
}
