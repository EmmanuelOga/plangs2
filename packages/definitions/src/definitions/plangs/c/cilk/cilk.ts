import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+cilk", {
      name: "Cilk",
      description:
        "Cilk, Cilk++, Cilk Plus and OpenCilk are general-purpose programming languages designed for multithreaded parallel computing. They are based on the C and C++ programming languages, which they extend with constructs to express parallel loops and the fork–join idiom.",
      keywords: ["cilk"],
      websites: [
        { title: "cilk.mit.edu", href: "https://cilk.mit.edu/", kind: "homepage" },
        { title: "Cilk", href: "https://en.wikipedia.org/wiki/Cilk", kind: "wikipedia" },
      ],
      extensions: [".cilk"],
      year: 1994,
      isTranspiler: false,
      isMainstream: false,
    })
    .addDialectOf(["pl+c"])
    .addInfluencedBy(["pl+c", "pl+c++"])
    .addParadigms(["paradigm+concurrent", "paradigm+imperative", "paradigm+parallel", "paradigm+procedural", "paradigm+structured"])
    .addPlatforms(["plat+cross", "plat+linux", "plat+x86-64"])
    .addTags(["tag+compiler", "tag+parallel-computing"])
    .addTypeSystems(["tsys+manifest", "tsys+static", "tsys+weak"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
