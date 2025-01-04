import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.license.set("lic+zlib", {
    name: "zlib",
    description:
      "The zlib License is a permissive free software license used for the zlib compression library.",
    extHomeURL: "https://en.wikipedia.org/wiki/Zlib_License",
    isFSFLibre: true,
    isOSIApproved: true,
    keywords: ["zlib"],
    spdx: "Zlib",
  });
}
