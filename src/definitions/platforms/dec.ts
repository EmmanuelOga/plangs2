import type { PlangsGraph } from "../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlatform("platf+dec").merge({
    name: "DEC",
    websites: [
      { kind: "wikipedia", title: "Alpha", href: "https://en.wikipedia.org/wiki/DEC_Alpha" },
      { kind: "wikipedia", title: "PRISM", href: "https://en.wikipedia.org/wiki/DEC_PRISM" },
      { kind: "wikipedia", title: "DEC", href: "https://en.wikipedia.org/wiki/Digital_Equipment_Corporation" },
    ],
  });

  /**/
}
