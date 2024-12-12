import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+scala", {
      name: "Scala",
      description:
        "Scala is a strong statically typed high-level general-purpose programming language that supports both object-oriented programming and functional programming. Designed to be concise, many of Scala's design decisions are intended to address criticisms of Java. It is well-suited to building fast, concurrent, and distributed systems with its JVM, JavaScript, and Native runtimes.",
      keywords: ["scala"],
      extensions: [".sc", ".scala"],
      releases: [
        { version: "3.5.0", name: "Scala 3.5.0", date: "2024-08-22" },
        { version: "3.4.0", name: "Scala 3.4.0", date: "2024-01-01" },
      ],
      stackovTags: ["scala"],
      githubName: "Scala",
      languishRanking: 31,
      githubLangId: "341",
      githubColor: "#c22d40",
      githubPopular: true,
      githubType: "programming",
      extWikipediaPath: "Scala_(programming_language)",
      extRedditPath: "scala",
      extHomeURL: "http://www.scala-lang.org/",
      created: "2004",
      isTranspiler: false,
      shortDesc:
        "Scala is a statically typed language supporting both object-oriented and functional programming, known for addressing Java's criticisms and supporting concurrent, distributed systems.",
      githubStars: 5900,
      extGithubPath: "scala/scala3",
    })
    .relInfluencedBy.add(
      "pl+common-lisp",
      "pl+eiffel",
      "pl+erlang",
      "pl+f-sharp",
      "pl+haskell",
      "pl+lisp",
      "pl+ocaml",
      "pl+r5rs",
      "pl+scheme",
      "pl+standard-ml",
    )
    .relLicenses.add("lic+apache")
    .relParadigms.add("para+concurrent", "para+functional", "para+imperative", "para+multi", "para+oop")
    .relPlatforms.add("plat+java", "plat+nodejs", "plat+wasm")
    .relTags.add(
      "tag+app",
      "tag+audio-dev",
      "tag+compiler",
      "tag+framework",
      "tag+industrial",
      "tag+interpreters",
      "tag+scripting",
      "tag+server",
      "tag+shell",
      "tag+testing",
    )
    .relTypeSystems.add("tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
