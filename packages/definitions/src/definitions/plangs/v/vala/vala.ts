import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+vala", {}).addInfluencedBy(["pl+boo", "pl+c", "pl+c-sharp", "pl+d"]);
}
