import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
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
    .addInfluencedBy(["pl+c-sharp", "pl+eiffel", "pl+groovy", "pl+javascript", "pl+ml", "pl+python", "pl+scala"])
    .addLicenses(["license+apache"])
    .addParadigms([
      "paradigm+concurrent",
      "paradigm+declarative",
      "paradigm+functional",
      "paradigm+imperative",
      "paradigm+multi",
      "paradigm+oop",
      "paradigm+reflective",
      "paradigm+structured",
    ])
    .addPlatforms(["plat+android", "plat+apple", "plat+cross", "plat+linux", "plat+nodejs", "plat+wasm", "plat+windows"])
    .addTags(["tag+app", "tag+compiler", "tag+framework", "tag+industrial", "tag+interpreter", "tag+scripting", "tag+shell"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);
}
