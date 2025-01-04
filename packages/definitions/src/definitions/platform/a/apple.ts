import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.platform.set("plat+apple", {
    name: "Apple",
    description:
      "Apple's family of operating systems includes macOS for desktops, iOS for mobile, tvOS for Apple TV, watchOS for Apple Watch, and visionOS for mixed reality.",
    extHomeURL: "https://en.wikipedia.org/wiki/Apple_silicon",
    keywords: [
      "apple silicon",
      "ios",
      "m1",
      "m2",
      "macos",
      "tvos",
      "visionos",
      "watchos",
    ],
  });
}
