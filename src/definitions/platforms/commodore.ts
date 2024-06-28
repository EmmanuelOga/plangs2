import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+commodore", "Commodore 128", {
    websites: [
      { kind: "wikipedia", title: "PET", href: "https://en.wikipedia.org/wiki/Commodore_PET" },
      { kind: "wikipedia", title: "Commodore 128", href: "https://en.wikipedia.org/wiki/Commodore_128" },
    ],
  });
}
