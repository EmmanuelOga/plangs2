import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.platform.set("plat+cross", {
    name: "Cross-Platform",
    description:
      "Cross-platform software is designed to run on multiple operating systems or hardware architectures.",
    extHomeURL: "https://en.wikipedia.org/wiki/Cross-platform",
    keywords: ["cross-platform", "multi-platform"],
  });
}
