import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+async", {
    name: "Task-Driven",
    description:
      "Asynchronous tasks executed independently, enabling concurrency and efficient resource utilization.",
    extHomeURL: "https://en.wikipedia.org/wiki/Asynchronous_method_invocation",
    keywords: ["async", "task-driven"],
  });
}
