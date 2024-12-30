import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.license.set("lic+python", {
    name: "PySFL",
    description: "The Python Software Foundation License is a free software license used for Python and related projects.",
    extHomeURL: "https://en.wikipedia.org/wiki/Python_Software_Foundation_License",
    isFSFLibre: true,
    isOSIApproved: true,
    keywords: ["python-software-foundation"],
    spdx: "Python-2.0",
  });
}
