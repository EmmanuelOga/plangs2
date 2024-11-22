import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+clojure", {
      name: "Clojure",
      description:
        "Clojure (/ˈkloʊʒər/, like closure) is a dynamic, general-purpose programming language, combining the approachability and interactive development of a scripting language with an efficient and robust infrastructure for multithreaded programming. It is known for its expressiveness, immutability, and concurrency.",
      keywords: ["clojure"],
      extensions: [".clj", ".cljc", ".cljd", ".cljr", ".cljs", ".edn"],
      releases: [{ version: "1.11.2", name: "Clojure 1.11.2", date: "2024-03-08" }],
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
    })
    .relDialectOf.add(["pl+lisp"])
    .relInfluencedBy.add([
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
    ])
    .relLicenses.add(["license+epl"])
    .relParadigms.add([
      "paradigm+agents",
      "paradigm+concurrent",
      "paradigm+functional",
      "paradigm+logic",
      "paradigm+macro",
      "paradigm+multi",
      "paradigm+pipeline",
    ])
    .relPlatforms.add(["plat+cross", "plat+java", "plat+nodejs"])
    .relTags.add([
      "tag+app",
      "tag+automation",
      "tag+cli",
      "tag+control",
      "tag+games",
      "tag+industrial",
      "tag+interpreters",
      "tag+scripting",
      "tag+shell",
    ])
    .relTsys.add(["tsys+dynamic", "tsys+strong"])
    .relWrittenIn.add(["pl+clojure", "pl+java"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
