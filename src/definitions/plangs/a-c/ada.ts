import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+ada",
    {
      name: "Ada",
      websites: [{ kind: "wikipedia", title: "Ada", href: "https://en.wikipedia.org/wiki/Ada_(programming_language)" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/3/31/Ada_horizon_green_logo_with_slogan.svg",
        },
      ],
      releases: [{ version: "unknown", date: "2022-01-01", kind: "stable" }],
    },
    {
      dialects: ["pl+ravenscar-profile", "pl+spark"],
      implementations: ["pl+ddc-i", "pl+gnat", "pl+ptc"],
      influences: [
        "pl+algol",
        "pl+clu",
        "pl+cpp",
        "pl+eiffel",
        "pl+java",
        "pl+modula",
        "pl+pascal",
        "pl+simula-67",
        "pl+smalltalk",
      ],
      paradigms: [
        "para+array",
        "para+aspect",
        "para+concurrent",
        "para+distributed",
        "para+generic",
        "para+imperative",
        "para+meta",
        "para+multi",
        "para+objects",
        "para+structured",
      ],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+nominative", "tsys+safe", "tsys+static", "tsys+strong"],
    },
  );
}
