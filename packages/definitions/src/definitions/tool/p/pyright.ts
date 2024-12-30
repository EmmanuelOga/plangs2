import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tool
    .set("tool+pyright", {
      name: "Pyright",
      description:
        "A full-featured, standards-compliant static type checker for Python. It is designed for high performance and can be used with large Python source bases.",
      extHomeURL: "https://microsoft.github.io/pyright/",
      keywords: ["static analysis", "type checker", "type inference"],
    })
    .relPlangs.add("pl+python");
}
