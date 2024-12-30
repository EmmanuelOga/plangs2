import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.license.set("lic+apache", {
    name: "Apache 2.0",
    description:
      "The Apache License 2.0 is a permissive free software license written by the Apache Software Foundation, providing an explicit grant of patent rights from contributors to users.",
    extHomeURL: "https://en.wikipedia.org/wiki/Apache_License_2.0",
    isFSFLibre: true,
    isOSIApproved: true,
    keywords: ["apache", "apache-2"],
    spdx: "Apache-2.0",
  });
}
