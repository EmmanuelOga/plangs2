import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+k",
    "k",
    {
      name: "k",
      websites: [
        { kind: "wikipedia", title: "K", href: "https://en.wikipedia.org/wiki/K_(programming_language)" },
        { kind: "homepage", title: "kx.com", href: "http://kx.com" },
      ],
      releases: [{ version: "unknown", date: "1993-01-01", kind: "first" }],
    },
    {
      influenced: ["pl+a-plus", "pl+apl", "pl+q"],
      influences: ["pl+a-plus", "pl+apl", "pl+q", "pl+scheme"],
      paradigms: ["para+array", "para+functional"],
      people: [["person+arthur-whitney", "designer"]],
      typeSystems: ["tsys+dynamic", "tsys+strong"],
    },
  );

  //-------------------------------------------------------------------------------

  lb.define(
    "pl+korn-shell",
    "Korn Shell",
    {
      name: "Korn Shell",
      websites: [{ kind: "wikipedia", title: "Korn Shell", href: "https://en.wikipedia.org/wiki/Korn_Shell" }],
    },
    { influenced: ["pl+awk"] },
  );

  //-------------------------------------------------------------------------------

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
      influenced: ["pl+gosu", "pl+groovy", "pl+java", "pl+ml", "pl+scala", "pl+v"],
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
        "pl+v-(vlang)",
      ],
      licenses: ["lic+apache-2"],
      paradigms: [
        "para+concurrent",
        "para+declarative",
        "para+functional",
        "para+generic",
        "para+imperative",
        "para+multi-paradigm",
        "para+objects",
        "para+reflective",
        "para+visual",
      ],
      platforms: [
        "platf+android",
        "platf+cross-platform",
        "platf+ios",
        "platf+jvm",
        "platf+linux",
        "platf+llvm",
        "platf+macos",
        "platf+tvos",
        "platf+watchos",
        "platf+web",
        "platf+windows",
      ],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );
}
