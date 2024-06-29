import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+dart",
    "Dart",
    {
      name: "Dart",
      websites: [
        { kind: "wikipedia", title: "Dart", href: "https://en.wikipedia.org/wiki/Dart_(programming_language)" },
        { kind: "homepage", title: "dart.dev", href: "https://dart.dev" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Dart_programming_language_logo.svg" },
      ],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "2011-10-10", kind: "first" },
        { version: "3.4.3", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".dart"],
    },
    {
      implementations: ["pl+flutter"],
      influences: [
        "pl+erlang",
        "pl+javascript",
        "pl+c",
        "pl+cpp",
        "pl+c-sharp",
        "pl+java",
        "pl+ruby",
        "pl+smalltalk",
        "pl+strongtalk",
        "pl+typescript",
      ],
      licenses: ["lic+bsd-s"],
      paradigms: ["para+multi", "para+functional", "para+imperative", "para+objects", "para+reflective"],
      people: ["person+lars-bak"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+optional", "tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );
}
