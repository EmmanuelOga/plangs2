import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+clojure", {
      name: "Clojure",
      description:
        "Clojure is a dynamic, general-purpose programming language that combines the features of a scripting language with an efficient infrastructure for multithreaded programming, known for its expressiveness, immutability, and support for concurrency.",
      keywords: ["clojure"],
      extensions: [".clj", ".cljc", ".cljd", ".cljr", ".cljs", ".edn"],
      releases: [{ version: "1.12.0", date: "2024-09-05" }],
      stackovTags: ["clojure"],
      githubName: "Clojure",
      languishRanking: 51,
      githubLangId: "62",
      githubColor: "#db5855",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Clojure",
      extRedditPath: "Clojure",
      extHomeURL: "https://clojure.org/",
      created: "2007",
      isTranspiler: false,
      shortDesc: "Clojure is a dynamic language known for its expressiveness and concurrent processing capabilities.",
      githubStars: 10500,
      extGithubPath: "clojure/clojure",
    })
    .relDialectOf.add("pl+lisp")
    .relInfluencedBy.add(
      "pl+c++",
      "pl+c-sharp",
      "pl+common-lisp",
      "pl+erlang",
      "pl+haskell",
      "pl+prolog",
      "pl+r5rs",
      "pl+racket",
      "pl+ruby",
      "pl+scheme",
      "pl+wolfram-language",
    )
    .relLicenses.add("lic+epl")
    .relParadigms.add("para+agents", "para+concurrent", "para+functional", "para+logic", "para+macro", "para+multi", "para+pipeline")
    .relPlatforms.add("plat+cross", "plat+java", "plat+nodejs")
    .relTags.add(
      "tag+app",
      "tag+automation",
      "tag+cli",
      "tag+control",
      "tag+games",
      "tag+industrial",
      "tag+interpreters",
      "tag+scripting",
      "tag+shell",
    )
    .relTypeSystems.add("tsys+dynamic", "tsys+strong")
    .relWrittenWith.add("pl+clojure", "pl+java");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
