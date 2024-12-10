import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+pure", {
      name: "Pure",
      description:
        "Pure, successor to the equational language Q, is a dynamically typed, functional programming language based on term rewriting. It integrates symbolic computation, pattern matching, and an easy-to-use C interface with the ability to JIT compile to native code via LLVM.",
      keywords: ["JIT", "LLVM", "functional programming", "pattern matching", "pure", "symbolic computation", "term rewriting"],
      extensions: [".pure"],
      releases: [{ version: "0.68", name: "Pure 0.68", date: "2018-01-01" }],
      extWikipediaPath: "Pure_(programming_language)",
      extHomeURL: "http://agraef.github.io/pure-lang",
      created: "2008",
    })
    .relInfluencedBy.add("pl+haskell", "pl+lisp")
    .relLicenses.add("lic+lgpl")
    .relParadigms.add("para+declarative", "para+functional", "para+rewriting")
    .relPlatforms.add("plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add(
      "tag+app",
      "tag+audio-dev",
      "tag+cas",
      "tag+industrial",
      "tag+interpreters",
      "tag+multimedia",
      "tag+numeric",
      "tag+sci",
      "tag+scripting",
      "tag+video",
    )
    .relTypeSystems.add("tsys+dynamic", "tsys+strong");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
