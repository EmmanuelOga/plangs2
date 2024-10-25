import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+jank", {
      name: "Jank",
      description:
        "Jank is a general-purpose programming language which embraces the interactive, value-oriented nature of Clojure as well as the desire for native compilation and minimal runtimes. jank is strongly compatible with Clojure and considers itself a dialect of Clojure. Please note that jank is under heavy development; assume all features are planned or incomplete.",
      keywords: ["jank"],
      websites: [
        { title: "Jank Official Website", href: "https://jank-lang.org/", kind: "homepage" },
        { title: "Jank on GitHub", href: "https://github.com/jank-lang/jank", kind: "repository" },
      ],
      extensions: [".jank"],
      year: 2015,
      isTranspiler: false,
    })
    .addInfluencedBy(["pl+clojure"])
    .addDialectOf(["pl+clojure"])
    .addParadigms(["paradigm+functional"])
    .addPlatforms(["plat+cross"])
    .addWrittenIn(["pl+llvm", "pl+c++"]);
}
