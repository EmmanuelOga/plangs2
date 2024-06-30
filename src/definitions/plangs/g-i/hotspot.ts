import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+hotspot").merge({
    name: "HotSpot",
    websites: [
      { kind: "wikipedia", title: "HotSpot", href: "https://en.wikipedia.org/wiki/HotSpot_(virtual_machine)" },
    ],
  });
}
