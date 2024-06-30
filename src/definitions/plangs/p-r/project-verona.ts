import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+project-verona",
    {
      name: "Project Verona",
      websites: [
        { kind: "wikipedia", title: "Project Verona", href: "https://en.wikipedia.org/wiki/Project_Verona" },
        { kind: "repository", title: "GitHub", href: "https://github.com/microsoft/verona" },
      ],
    },
    {
      influences: ["pl+cyclone", "pl+rust"],
      licenses: ["lic+mit"],
      platforms: ["platf+cross-platform", "platf+linux", "platf+win", "platf+mac"],
    },
  );
}
