import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+cilk", {
      images: [],
      name: "Cilk",
      description:
        "Cilk, Cilk++, Cilk Plus and OpenCilk are general-purpose programming languages designed for multithreaded parallel computing. They are based on the C and C++ programming languages, which they extend with constructs to express parallel loops and the fork–join idiom.",
      websites: [
        { href: "https://cilk.mit.edu/", title: "cilk.mit.edu", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Cilk", title: "Cilk", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [],
    })
    .addDialectOf(["pl+c"])
    .addInfluencedBy(["pl+c"])
    .addParadigms(["para+concurrent", "para+imperative", "para+procedural", "para+structured"])
    .addTypeSystems(["tsys+manifest", "tsys+static", "tsys+weak"]);
}
