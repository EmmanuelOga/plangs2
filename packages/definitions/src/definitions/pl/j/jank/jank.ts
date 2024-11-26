import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang.    .set("pl+jank", {
      name: "Jank",
      description:
        "Jank is a general-purpose programming language which embraces the interactive, value-oriented nature of Clojure as well as the desire for native runtime and performance similar to C++. It is strongly compatible with Clojure and considers itself a dialect of Clojure. Jank uses an LLVM-based JIT to compile machine code on-the-fly.",
      keywords: ["C++", "LLVM", "clojure", "jank"],
      extensions: [".jank"],
      extGithubPath: "jank-lang/jank",
      extHomeURL: "https://jank-lang.org/",
      created: "2015",
    })
    .relDialectOf.add(["pl+clojure"])
    .relInfluencedBy.add(["pl+clojure"])
    .relParadigm.add(["para+functional", "para+general-purpose"])
    .relPlatforms.add(["plat+cross"])
    .relTsys.add(["tsys+strong"])
    .relWrittenIn.add(["pl+c++", "pl+llvm"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
