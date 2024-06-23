import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+kotlin",
    "Kotlin",
    {
      name: "Kotlin",
      websites: [
        { kind: "wikipedia", title: "Kotlin", href: "https://en.wikipedia.org/wiki/Kotlin_(programming_language)" },
        { kind: "homepage", title: "kotlinlang.org", href: "https://kotlinlang.org/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/1/11/Kotlin_logo_2021.svg" }],
      releases: [
        { version: "unknown", date: "2011-07-22", kind: "first" },
        { version: "2.0.0", date: "2024-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [
          {
            href: "https://github.com/JetBrains/kotlin/releases/tag/v2.0.0",
            title: "Release Kotlin 2.0.0 (Repository)",
          },
        ],
      },
      extensions: [".kt", ".kts", ".kexe", ".klib"],
    },
    {
      influenced: ["pl+apache-groovy", "pl+gosu", "pl+java", "pl+ml", "pl+scala", "pl+v"],
      influences: [
        "pl+c-sharp",
        "pl+eiffel",
        "pl+gosu",
        "pl+groovy",
        "pl+java",
        "pl+javascript",
        "pl+ml",
        "pl+python",
        "pl+scala",
        "pl+v",
      ],
      licenses: ["lic+apache"],
      paradigms: [
        "para+block",
        "para+concurrent",
        "para+declarative",
        "para+functional",
        "para+generic",
        "para+imperative",
        "para+multi",
        "para+objects",
        "para+reflection",
      ],
      platforms: [
        "platf+android",
        "platf+cross-platform",
        "platf+ios",
        "platf+javascript",
        "platf+jvm",
        "platf+linux",
        "platf+llvm",
        "platf+mac",
        "platf+tvos",
        "platf+wasm",
        "platf+watchos",
        "platf+windows",
      ],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );

  /**/
}
