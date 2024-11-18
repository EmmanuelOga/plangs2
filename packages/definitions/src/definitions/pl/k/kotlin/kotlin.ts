import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+kotlin", {
      name: "Kotlin",
      description:
        "Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference. It is designed to interoperate fully with Java, and its syntax is more concise thanks to type inference. Kotlin primarily targets the JVM, but it also compiles to JavaScript for front-end web applications and native code via LLVM for iOS apps. Language development is led by JetBrains, and the Kotlin Foundation oversees the Kotlin trademark.",
      keywords: ["jetbrains", "kotlin", "programming language"],
      extensions: [".kexe", ".klib", ".kt", ".kts"],
      year: 2011,
      isTranspiler: true,
      releases: [
        { version: "2.0.0", name: "Kotlin 2.0.0", date: "2024-05-21" },
        { version: "2.0.20", name: "Kotlin 2.0.20", date: "2024-08-22" },
      ],
      stackovTags: ["kotlin"],
      githubName: "Kotlin",
      languishRanking: 14,
      githubLangId: "189",
      githubColor: "#A97BFF",
      githubPopular: true,
      githubType: "programming",
      extWikipediaPath: "Kotlin_(programming_language)",
      extRedditPath: "Kotlin",
      extHomeURL: "https://kotlinlang.org/",
    })
    .addCompilesTo(["pl+javascript", "pl+llvm"])
    .addInfluencedBy(["pl+c-sharp", "pl+eiffel", "pl+groovy", "pl+javascript", "pl+python", "pl+scala"])
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
    .addPlatforms(["plat+android", "plat+apple", "plat+cross", "plat+java", "plat+linux", "plat+nodejs", "plat+wasm", "plat+web", "plat+windows"])
    .addTags(["tag+app", "tag+compiler", "tag+framework", "tag+industrial", "tag+interpreter", "tag+scripting", "tag+shell", "tag+testing"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
