import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.paradigm.set("para+rules", {
    name: "Rule-Based",
    description:
      "Involves defining rules that control the logic of decision-making systems.",
    extHomeURL:
      "https://en.wikipedia.org/wiki/Production_system_(computer_science)",
    keywords: ["rule", "rules"],
  });
}
