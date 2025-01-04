import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.platform.set("plat+arm", {
    name: "ARM",
    description:
      "ARM architecture is widely used in mobile devices and embedded systems, supporting 32-bit and 64-bit instruction sets.",
    extHomeURL: "https://en.wikipedia.org/wiki/ARM_architecture",
    keywords: ["aarch64", "arm32", "arm64", "armel", "armhf", "armv7"],
  });
}
