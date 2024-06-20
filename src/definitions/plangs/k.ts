import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define("pl+K", "K", {
    name: "K",
    websites: [
      {
        kind: "wikipedia",
        title: "K",
        href: "https://en.wikipedia.org/wiki/K_(programming_language)",
      },
      { kind: "homepage", title: "kx.com", href: "http://kx.com" },
    ],
    releases: [{ version: "unknown", date: "1993-01-01", kind: "first" }],
    people: [["person+Arthur-Whitney", "designer"]],
    paradigms: ["para+array", "para+functional"],
    typeSystems: ["tsys+dynamic", "tsys+strong"],
    influences: ["pl+A-Plus", "pl+APL", "pl+Scheme", "pl+Q"],
    influenced: ["pl+A-Plus", "pl+APL"],
  });

  lb.define("pl+k", "k", {
    name: "k",
    websites: [
      {
        kind: "wikipedia",
        title: "k",
        href: "https://en.wikipedia.org/wiki/K_(programming_language)",
      },
    ],
    influenced: ["pl+q"],
  });

  lb.define("pl+Korn-Shell", "Korn Shell", {
    name: "Korn Shell",
    websites: [
      { kind: "wikipedia", title: "Korn Shell", href: "https://en.wikipedia.org/wiki/Korn_Shell" },
    ],
    influenced: ["pl+AWK"],
  });

  lb.define("pl+Kotlin", "Kotlin", {
    name: "Kotlin",
    websites: [
      {
        kind: "wikipedia",
        title: "Kotlin",
        href: "https://en.wikipedia.org/wiki/Kotlin_(programming_language)",
      },
      { kind: "homepage", title: "kotlinlang.org", href: "https://kotlinlang.org/" },
    ],
    images: [
      {
        kind: "logo",
        url: "https://upload.wikimedia.org/wikipedia/commons/1/11/Kotlin_logo_2021.svg",
      },
    ],
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
    licenses: ["lic+apache-2"],
    paradigms: [
      "para+multi-paradigm",
      "para+objects",
      "para+functional",
      "para+imperative",
      "para+visual",
      "para+declarative",
      "para+generic",
      "para+reflective",
      "para+concurrent",
    ],
    typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    platforms: [
      "platf+android",
      "platf+jvm",
      "platf+macos",
      "platf+ios",
      "platf+tvos",
      "platf+watchos",
      "platf+linux",
      "platf+windows",
      "platf+web",
      "platf+llvm",
      "platf+cross-platform",
    ],
    influences: [
      "pl+C-Sharp",
      "pl+Eiffel",
      "pl+Gosu",
      "pl+Groovy",
      "pl+Java",
      "pl+JavaScript",
      "pl+ML",
      "pl+Python",
      "pl+Scala",
      "pl+V-(Vlang)",
    ],
    influenced: ["pl+Java", "pl+ML", "pl+Scala", "pl+Gosu", "pl+V", "pl+Groovy"],
  });
}
