import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+clojure", {
      images: [{ kind: "logo", title: "Clojure", url: "/images/plangs/c/clojure/logo.png" }],
      name: "Clojure",
      description: "Clojure (/ˈkloʊʒər/, like closure) is a dynamic and functional dialect of the Lisp programming language on the Java platform.",
      websites: [
        { href: "https://clojure.org/", title: "clojure.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Clojure_(programming_language)", title: "Clojure", kind: "wikipedia" },
      ],
      extensions: [".clj", ".cljc", ".cljd", ".cljr", ".cljs", ".edn"],
      releases: [{ version: "1.11.2", date: "2024-01-01" }],
    })
    .addDialectOf(["pl+lisp"])
    .addInfluencedBy([
      "pl+c++",
      "pl+c-sharp",
      "pl+common-lisp",
      "pl+erlang",
      "pl+haskell",
      "pl+ml",
      "pl+mzscheme",
      "pl+prolog",
      "pl+r5rs",
      "pl+racket",
      "pl+ruby",
      "pl+scheme",
      "pl+wolfram-language",
    ])
    .addParadigms(["para+agents", "para+concurrent", "para+functional", "para+logic", "para+macro", "para+multi", "para+pipeline"])
    .addPlatforms(["platf+java", "platf+nodejs"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);
}
