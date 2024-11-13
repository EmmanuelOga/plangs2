import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+jank", {
      name: "Jank",
      description:
        "Jank is a general-purpose programming language which embraces the interactive, value-oriented nature of Clojure as well as the desire for native runtime and performance similar to C++. It is strongly compatible with Clojure and considers itself a dialect of Clojure. Jank uses an LLVM-based JIT to compile machine code on-the-fly.",
      keywords: ["C++", "LLVM", "clojure", "jank"],
      websites: [
        { title: "jank programming language - Clojure/LLVM/C++", href: "https://jank-lang.org/", kind: "homepage" },
        { title: "jank-lang/jank: The native Clojure dialect hosted on LLVM", href: "https://github.com/jank-lang/jank", kind: "repository" },
      ],
      extensions: [".jank"],
      year: 2015,
      isMainstream: false,
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
