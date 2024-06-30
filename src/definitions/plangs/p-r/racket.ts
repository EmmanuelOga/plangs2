import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+racket",
    {
      name: "Racket",
      websites: [
        { kind: "wikipedia", title: "Racket", href: "https://en.wikipedia.org/wiki/Racket_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Racket-logo.svg" }],
      releases: [{ version: "8.13", date: "2024-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+eiffel", "pl+scheme"],
      licenses: ["lic+apache", "lic+mit"],
      paradigms: [
        "para+functional",
        "para+imperative",
        "para+logic",
        "para+meta",
        "para+modular",
        "para+multi",
        "para+objects",
        "para+reflective",
      ],
      platforms: ["platf+arm", "platf+cross-platform", "platf+mips", "platf+x86"],
      typeSystems: ["tsys+dynamic", "tsys+static", "tsys+strong"],
    },
  );
}
