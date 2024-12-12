import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+inko", {
      name: "Inko",
      description:
        "Inko is a programming language designed for building concurrent software efficiently and safely. It features deterministic automatic memory management, move semantics, static typing, and type-safe concurrency. It is particularly known for avoiding runtime errors, race conditions, and unpredictable performance.",
      keywords: ["concurrent", "inko", "safe", "type-safe"],
      extensions: [".inko"],
      releases: [{ version: "0.17.1", date: "2024-10-29" }],
      extGithubPath: "inko-lang/inko",
      extHomeURL: "https://inko-lang.org",
      created: "2016",
      isTranspiler: false,
      shortDesc: "Inko is a language for efficient, safe concurrent software, with features like static typing and type-safe concurrency.",
      githubStars: 913,
      ghRepoCreated: "2016-11-07",
    })
    .relInfluencedBy.add("pl+erlang", "pl+go")
    .relLicenses.add("lic+mit", "lic+mpl")
    .relParadigms.add("para+concurrent", "para+message-passing", "para+multi", "para+oop")
    .relPlatforms.add("plat+cross", "plat+linux")
    .relTags.add("tag+automation")
    .relTypeSystems.add("tsys+nominal", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+rust", "pl+llvm");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
