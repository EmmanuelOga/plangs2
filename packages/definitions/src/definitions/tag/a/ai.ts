import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+ai", { name: "AI", description: "Artificial Intelligence" });
}
