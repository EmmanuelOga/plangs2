import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  lb.define("para+json", "JSON", [
    {
      kind: "wikipedia",
      title: "JSON",
      href: "https://en.wikipedia.org/wiki/JSON",
    },
  ]);
}
