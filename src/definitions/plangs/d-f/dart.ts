import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+dart",
    {
      name: "Dart",
      websites: [
        { kind: "wikipedia", title: "Dart", href: "https://en.wikipedia.org/wiki/Dart_(programming_language)" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Dart_programming_language_logo.svg" },
      ],
      releases: [{ version: "3.4.3", date: "2024-01-01", kind: "stable" }],
    },
    {
      implementations: ["pl+flutter"],
      influences: [
        "pl+c",
        "pl+c-sharp",
        "pl+cpp",
        "pl+erlang",
        "pl+java",
        "pl+javascript",
        "pl+ms-visual-c-sharp",
        "pl+ruby",
        "pl+smalltalk",
        "pl+strongtalk",
        "pl+typescript",
      ],
      people: ["person+lars-bak"],
      licenses: ["lic+bsd-s"],
      paradigms: ["para+functional", "para+imperative", "para+multi", "para+objects", "para+reflective"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+inferred", "tsys+optional", "tsys+static", "tsys+strong"],
    },
  );
}
