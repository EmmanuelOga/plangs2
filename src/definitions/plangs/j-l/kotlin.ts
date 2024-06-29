import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+kotlin",
    "Kotlin",
    {
      name: "Kotlin",
      websites: [
        { kind: "wikipedia", title: "Kotlin", href: "https://en.wikipedia.org/wiki/Kotlin_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/1/11/Kotlin_logo_2021.svg" }],
      releases: [{ version: "2.0.0", date: "2024-01-01", kind: "stable" }],
    },
    {
      influences: [
        "pl+apache-groovy",
        "pl+c-sharp",
        "pl+gosu",
        "pl+groovy",
        "pl+java",
        "pl+ms-visual-c-sharp",
        "pl+ml",
        "pl+scala",
      ],
      licenses: ["lic+apache"],
      paradigms: [
        "para+multi",
        "para+objects",
        "para+functional",
        "para+imperative",
        "para+block",
        "para+dec",
        "para+generic",
        "para+reflection",
        "para+concurrent",
      ],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );
}
