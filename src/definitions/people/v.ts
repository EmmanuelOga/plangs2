import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+van-Wijngaarden", "van Wijngaarden", [
    {
      title: "van Wijngaarden",
      href: "https://en.wikipedia.org/wiki/Adriaan_van_Wijngaarden",
      kind: "wikipedia",
    },
  ]);
}
