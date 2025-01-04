import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+cilk", {
      name: "Cilk",
      description:
        "Cilk++, Cilk Plus, and OpenCilk are general-purpose programming languages designed for multithreaded parallel computing. They are based on the C and C++ languages and extend them with constructs for parallel loops and the fork-join idiom.",
      shortDesc:
        "Family of languages designed for parallel computing extending C and C++.",
      created: "1994",
      extensions: [".cilk"],
      extGithubPath: "OpenCilk/opencilk-project",
      extHomeURL: "https://www.opencilk.org/",
      extWikipediaPath: "Cilk",
      githubStars: 99,
      isTranspiler: false,
      keywords: ["cilk", "cilk plus", "opencilk"],
      releases: [{ version: "2.1", date: "2024-01-13" }],
    })
    .relDialectOf.add("pl+c")
    .relInfluencedBy.add("pl+c", "pl+c++")
    .relLicenses.add("lic+mit")
    .relParadigms.add(
      "para+concurrent",
      "para+imperative",
      "para+parallel",
      "para+procedural",
      "para+structured",
    )
    .relPlatforms.add("plat+apple", "plat+cross", "plat+linux", "plat+x86-64")
    .relTags.add("tag+compiler")
    .relTypeSystems.add("tsys+manifest", "tsys+static", "tsys+weak");
}
