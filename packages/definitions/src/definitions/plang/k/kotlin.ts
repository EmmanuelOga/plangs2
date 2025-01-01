import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+kotlin", {
      name: "Kotlin",
      description:
        "Cross-platform, statically typed language designed to interoperate with Java, featuring concise syntax due to its type inference. It targets the JVM and compiles to JavaScript and native code via LLVM for various platforms, under the guidance of JetBrains and the Kotlin Foundation.",
      shortDesc: "Concise, statically typed language interoperative with Java, targeting JVM and other platforms.",
      created: "2011",
      extensions: [".kexe", ".klib", ".kt", ".kts"],
      extGithubPath: "JetBrains/kotlin",
      extHomeURL: "https://kotlinlang.org/",
      extRedditPath: "Kotlin",
      extWikipediaPath: "Kotlin_(programming_language)",
      githubColor: "#A97BFF",
      githubLangId: "189",
      githubName: "Kotlin",
      githubPopular: true,
      githubStars: 49600,
      githubType: "programming",
      isTranspiler: true,
      keywords: ["jetbrains", "kotlin", "programming language"],
      languishRanking: 14,
      releases: [{ version: "2.1.0", date: "2024-09-27" }],
      stackovTags: ["kotlin"],
    })
    .relCompilesTo.add("pl+javascript", "pl+llvm")
    .relInfluencedBy.add("pl+c-sharp", "pl+eiffel", "pl+groovy", "pl+javascript", "pl+python", "pl+scala")
    .relLicenses.add("lic+apache")
    .relParadigms.add(
      "para+concurrent",
      "para+declarative",
      "para+functional",
      "para+imperative",
      "para+multi",
      "para+oop",
      "para+reflective",
      "para+structured",
    )
    .relPlatforms.add("plat+android", "plat+apple", "plat+cross", "plat+java", "plat+linux", "plat+nodejs", "plat+wasm", "plat+web", "plat+windows")
    .relTags.add("tag+app", "tag+compiler", "tag+framework", "tag+industrial", "tag+interpreters", "tag+scripting", "tag+shell", "tag+testing")
    .relTypeSystems.add("tsys+flow", "tsys+generic", "tsys+inferred", "tsys+object", "tsys+static", "tsys+strong");
}
