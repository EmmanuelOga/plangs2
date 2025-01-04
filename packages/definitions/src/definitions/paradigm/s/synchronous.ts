import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+synchronous", {
    name: "Sync",
    description:
      "Operates in a time-driven manner where operations occur sequentially and in sync with a clock.",
    extHomeURL:
      "https://en.wikipedia.org/wiki/Synchronous_programming_language",
    keywords: ["synchronous"],
  });
}
