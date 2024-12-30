import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tool
    .set("tool+pixi", {
      name: "Pixi",
      description:
        "A package management tool for developers. It allows the developer to install libraries and applications in a reproducible way. Use pixi cross-platform, on Windows, Mac and Linux.",
      extHomeURL: "https://pixi.sh/",
      keywords: ["dependency manager", "package management", "package manager"],
    })
    .relPlangs.add("pl+python")
    .relWrittenWith.add("pl+rust");
}
