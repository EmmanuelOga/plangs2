import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+gleam",
    {
      name: "Gleam",
      websites: [
        { kind: "wikipedia", title: "Gleam", href: "https://en.wikipedia.org/wiki/Gleam_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Gleam_Lucy.png/220px-Gleam_Lucy.png",
        },
      ],
      releases: [{ version: "1.1.0", date: "2024-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+rust"],
      influences: ["pl+elixir", "pl+reia"],
      licenses: ["lic+apache"],
      paradigms: ["para+concurrent", "para+functional", "para+multi"],
      platforms: ["platf+bsd", "platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+inferred", "tsys+safe", "tsys+static"],
    },
  );
}
