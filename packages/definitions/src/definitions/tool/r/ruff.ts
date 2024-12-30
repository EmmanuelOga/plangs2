import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tool
    .set("tool+ruff", {
      name: "Ruff",
      description: "Extremely fast Python linter and code formatter, written in Rust.",
      extHomeURL: "https://docs.astral.sh/ruff/",
      keywords: ["code quality", "formatter", "linter"],
    })
    .relPlangs.add("pl+python")
    .relWrittenWith.add("pl+rust");
}
