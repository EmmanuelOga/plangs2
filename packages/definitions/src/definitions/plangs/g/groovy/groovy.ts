import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl.set("pl+groovy", {}).addInfluencedBy(["pl+perl", "pl+ruby"]);
}
