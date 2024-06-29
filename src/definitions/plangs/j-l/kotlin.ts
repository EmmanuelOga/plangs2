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
        { kind: "homepage", title: "kotlinlang.org", href: "https://kotlinlang.org/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/1/11/Kotlin_logo_2021.svg" }],
      releases: [
        { version: "unknown", date: "2011-07-22", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "2.0.0", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".kt", ".kts", ".kexe", ".klib"],
    },
    {
      influences: [
        "pl+java",
        "pl+ml",
        "pl+scala",
        "pl+gosu",
        "pl+apache-groovy",
        "pl+c-sharp",
        "pl+eiffel",
        "pl+groovy",
        "pl+javascript",
        "pl+python",
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
      platforms: [
        "platf+android",
        "platf+jvm",
        "platf+javascript",
        "platf+mac",
        "platf+ios",
        "platf+tvos",
        "platf+watchos",
        "platf+linux",
        "platf+win",
        "platf+wasm",
        "platf+llvm",
        "platf+cross-platform",
      ],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );
}
