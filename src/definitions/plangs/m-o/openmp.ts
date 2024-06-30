import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+openmp").merge({
    name: "OpenMP",
    websites: [{ kind: "wikipedia", title: "OpenMP", href: "https://en.wikipedia.org/wiki/OpenMP" }],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/OpenMP_logo.png/180px-OpenMP_logo.png",
      },
    ],
    releases: [{ version: "5.2", date: "2021-01-01", kind: "stable" }],
  });
}
