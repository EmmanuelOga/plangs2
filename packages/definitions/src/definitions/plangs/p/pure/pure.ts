import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+pure", {
      name: "Pure",
      description:
        "Pure, successor to the equational language Q, is a dynamically typed, functional programming language based on term rewriting. It integrates symbolic computation, pattern matching, and an easy-to-use C interface with the ability to JIT compile to native code via LLVM.",
      keywords: ["JIT", "LLVM", "functional programming", "pattern matching", "pure", "symbolic computation", "term rewriting"],
      extensions: [".pure"],
      year: 2008,
      releases: [{ version: "0.68", name: "Pure 0.68", date: "2018-01-01" }],
      extWikipediaPath: "Pure_(programming_language)",
      extHomeURL: "http://agraef.github.io/pure-lang",
    })
    .addInfluencedBy(["pl+alice", "pl+haskell", "pl+lisp"])
    .addLicenses(["license+lgpl"])
    .addParadigms(["paradigm+declarative", "paradigm+functional", "paradigm+rewriting"])
    .addPlatforms(["plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+windows"])
    .addTags([
      "tag+app",
      "tag+audio-dev",
      "tag+cas",
      "tag+industrial",
      "tag+interpreter",
      "tag+multimedia",
      "tag+numeric",
      "tag+sci",
      "tag+scripting",
      "tag+video",
    ])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
