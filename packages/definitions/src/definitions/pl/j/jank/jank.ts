import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+jank", {
      name: "Jank",
      description:
        "Jank is a general-purpose programming language which embraces the interactive, value-oriented nature of Clojure as well as the desire for native runtime and performance similar to C++. It is strongly compatible with Clojure and considers itself a dialect of Clojure. Jank uses an LLVM-based JIT to compile machine code on-the-fly.",
      keywords: ["C++", "LLVM", "clojure", "jank"],
      extensions: [".jank"],
      year: 2015,
      extGithubPath: "jank-lang/jank",
      extHomeURL: "https://jank-lang.org/",
    })
    .addDialectOf(["pl+clojure"])
    .addInfluencedBy(["pl+clojure"])
    .addParadigms(["paradigm+functional", "paradigm+general-purpose"])
    .addPlatforms(["plat+cross"])
    .addTypeSystems(["tsys+strong"])
    .addWrittenIn(["pl+c++", "pl+llvm"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
