import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.post.set("post+2024_12_31_welcome", {
    name: "Welcome to Plangs!",
    date: "2024-12-31",
    path: "2024_12_31_welcome.md",
  });
}
