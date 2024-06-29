import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+mojo",
    "Mojo",
    {
      name: "Mojo",
      websites: [
        { kind: "wikipedia", title: "Mojo", href: "https://en.wikipedia.org/wiki/Mojo_(programming_language)" },
        { kind: "homepage", title: "www.modular.com/mojo", href: "https://www.modular.com/mojo" },
      ],
      releases: [
        { version: "unknown", date: "2023-01-01", kind: "first" },
        { version: "24.4", date: "2024-05-24", kind: "preview" },
      ],
      extensions: [],
    },
    {
      influences: ["pl+python"],
      licenses: ["lic+proprietary"],
      paradigms: ["para+multi", "para+imperative", "para+functional", "para+generic"],
      people: ["person+chris-lattner"],
      platforms: ["platf+cross-platform"],
      typeSystems: [
        "tsys+affine",
        "tsys+inferred",
        "tsys+nominative",
        "tsys+duck",
        "tsys+static",
        "tsys+dynamic",
        "tsys+strong",
      ],
    },
  );
}
