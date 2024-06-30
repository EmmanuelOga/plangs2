import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+project-verona").merge({
    name: "Project Verona",
    websites: [
      { kind: "wikipedia", title: "Project Verona", href: "https://en.wikipedia.org/wiki/Project_Verona" },
      { kind: "repository", title: "GitHub", href: "https://github.com/microsoft/verona" },
    ],
  });
}
