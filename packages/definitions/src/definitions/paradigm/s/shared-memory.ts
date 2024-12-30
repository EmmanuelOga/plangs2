import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+shared-memory", {
    name: "Shared Mem",
    description: "Allow multiple processes to access the same memory space.",
    extHomeURL: "https://en.wikipedia.org/wiki/Shared_memory",
    keywords: ["shared memory"],
  });
}
