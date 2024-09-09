import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plangs
    .set("pl+kotlin", {
      name: "Kotlin",
      description:
        "Kotlin (/ˈkɒtlɪn/) is a cross-platform, statically typed, general-purpose high-level programming language with type inference. Kotlin is designed to interoperate fully with Java, and the JVM version of Kotlin's standard library depends on the Java Class Library,\nbut type inference allows its syntax to be more concise. Kotlin mainly targets the JVM, but also compiles to JavaScript (e.g., for frontend web applications using React) or native code via LLVM (e.g., for native iOS apps sharing business logic with Android apps). Language development costs are borne by JetBrains, while the Kotlin Foundation protects the Kotlin trademark.",
      firstAppeared: "2011-01-01",
      extensions: [".kexe", ".klib", ".kt", ".kts"],
      websites: [
        { href: "https://kotlinlang.org/", title: "kotlinlang.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Kotlin_(programming_language)", title: "Kotlin", kind: "wikipedia" },
      ],
      releases: [{ version: "2.0.0", date: "2024-01-01" }],
    })
    .addInfluencedBy(["pl+c-sharp", "pl+eiffel", "pl+groovy", "pl+javascript", "pl+ml", "pl+scala"])
    .addLicenses(["lic+apache"])
    .addParadigms([
      "para+concurrent",
      "para+declarative",
      "para+functional",
      "para+imperative",
      "para+multi",
      "para+oop",
      "para+reflective",
      "para+structured",
    ])
    .addPlatforms(["platf+android", "platf+apple", "platf+cross", "platf+linux", "platf+nodejs", "platf+wasm", "platf+windows"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);
}
