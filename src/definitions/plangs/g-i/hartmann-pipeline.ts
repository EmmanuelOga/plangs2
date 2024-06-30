import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+hartmann-pipeline",
    {
      name: "Pipelines",
      websites: [
        { kind: "wikipedia", title: "Pipelines", href: "https://en.wikipedia.org/wiki/Hartmann_pipeline" },
        { kind: "homepage", title: "http://vm.marist.edu/~pipeline", href: "http://vm.marist.edu/~pipeline" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/0/0c/Pipjarg1.jpeg" }],
      releases: [{ version: "1.1.12", date: "2020-06-03", kind: "stable" }],
    },
    { influences: ["pl+pipeline"], paradigms: ["para+dataflow"], platforms: ["platf+z-slashvm"] },
  );
}
