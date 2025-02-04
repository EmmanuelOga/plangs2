import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+scala", {
      name: "Scala",
      description:
        "A strong statically typed high-level general-purpose programming language that supports both object-oriented programming and functional programming. Designed to be concise, many of Scala's design decisions are intended to address criticisms of Java. It is well-suited to building fast, concurrent, and distributed systems with its JVM, JavaScript, and Native runtimes.",
      shortDesc:
        "Statically typed language supporting both object-oriented and functional programming, known for addressing Java's criticisms and supporting concurrent, distributed systems.",
      created: "2004",
      extensions: [".sc", ".scala"],
      extGithubPath: "scala/scala3",
      extHomeURL: "http://www.scala-lang.org/",
      extRedditPath: "scala",
      extWikipediaPath: "Scala_(programming_language)",
      githubColor: "#c22d40",
      githubLangId: "341",
      githubName: "Scala",
      githubPopular: true,
      githubStars: 5900,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["scala"],
      languishRanking: 35,
      releases: [
        { version: "3.5.0", name: "Scala 3.5.0", date: "2024-08-22" },
        { version: "3.4.0", name: "Scala 3.4.0", date: "2024-01-01" },
      ],
      stackovTags: ["scala"],
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
    .relParadigms.add(
      "para+concurrent",
      "para+functional",
      "para+general-purpose",
      "para+imperative",
      "para+multi",
      "para+oop",
    )
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
    .relTypeSystems.add(
      "tsys+algebraic",
      "tsys+flow",
      "tsys+generic",
      "tsys+inferred",
      "tsys+object",
      "tsys+static",
      "tsys+strong",
      "tsys+structural",
    );
}
