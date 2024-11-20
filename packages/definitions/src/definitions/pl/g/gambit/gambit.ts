import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+gambit", {
      name: "Gambit",
      description:
        "Gambit, also known as Gambit-C, is a long-standing Scheme implementation that is part of the Lisp family. It provides both a Scheme interpreter and a compiler that translates Scheme into C, enhancing its portability across various platforms. The language adheres to R4RS, R5RS, and IEEE standards, alongside numerous Scheme Requests for Implementations (SRFIs). Released first in 1988, Gambit is open-source under the LGPL 2.1 and Apache 2.0 licenses. Its design emphasizes simplicity while achieving performance, making it suitable for research in compilers and concurrency. Variants like Gerbil Scheme and Termite Scheme were influenced by Gambit.",
      keywords: ["compilers", "concurrency", "gambit", "lisp", "scheme"],
      extensions: [".scm"],
      isTranspiler: true,
      releases: [{ version: "4.9.5", name: "Gambit 4.9.5", date: "2023-07-01" }],
      extWikipediaPath: "Gambit_(scheme_implementation)",
      extHomeURL: "http://gambitscheme.org/",
      created: "1988",
    })
    .addCompilesTo(["pl+c"])
    .addDialectOf(["pl+lisp"])
    .addInfluencedBy(["pl+lisp", "pl+scheme"])
    .addLicenses(["license+apache", "license+lgpl"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+metaprogramming", "paradigm+multi"])
    .addPlatforms(["plat+cross", "plat+x86-64"])
    .addTags(["tag+compiler", "tag+interpreters"])
    .addTypeSystems(["tsys+dynamic", "tsys+latent", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
