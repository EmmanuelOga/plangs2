import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.bundle.set("bun+plangs", {
    description: "Bundle used on the implementation of the Plangs! website.",
  });
}
