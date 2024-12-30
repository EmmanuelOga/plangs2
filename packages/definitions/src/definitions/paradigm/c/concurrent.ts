import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+concurrent", {
    name: "Concurrent",
    description:
      "An overall computation is factored into subcomputations that may be executed concurrently. Several computations are executed during overlapping time periods, concurrently, instead of sequentially.",
    extHomeURL: "https://en.wikipedia.org/wiki/Concurrent_computing",
    keywords: ["concurrent", "parallel"],
  });
}
