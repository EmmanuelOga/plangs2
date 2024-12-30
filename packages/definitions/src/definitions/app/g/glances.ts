import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.app
    .set("app+glances", {
      name: "Glances",
      description: "Cross-platform system monitoring tool written in Python.",
      extHomeURL: "https://nicolargo.github.io/glances/",
      keywords: ["monitoring", "system", "terminal"],
    })
    .relWrittenWith.add("pl+python");
}
