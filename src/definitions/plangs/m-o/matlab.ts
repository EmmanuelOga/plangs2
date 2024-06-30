import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+matlab").merge({
    name: "MATLAB",
    websites: [{ kind: "wikipedia", title: "MATLAB", href: "https://en.wikipedia.org/wiki/MATLAB" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/121px-Matlab_Logo.png",
      },
    ],
    releases: [{ version: "unknown", date: "2024-01-01", kind: "stable" }],
  });
}
