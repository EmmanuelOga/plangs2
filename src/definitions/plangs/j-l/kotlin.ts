import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+kotlin",
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
        "pl+ml",
        "pl+ms-visual-c-sharp",
        "pl+scala",
      ],
      licenses: ["lic+apache"],
      paradigms: [
        "para+block",
        "para+concurrent",
        "para+dec",
        "para+functional",
        "para+generic",
        "para+imperative",
        "para+multi",
        "para+objects",
        "para+reflection",
      ],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );
}
