import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+gambit", {
      name: "Gambit",
      description:
        "Long-standing Scheme implementation that is part of the Lisp family. It provides both a Scheme interpreter and a compiler that translates Scheme into C, enhancing its portability across various platforms. The language adheres to R4RS, R5RS, and IEEE standards, alongside numerous Scheme Requests for Implementations (SRFIs). Released first in 1988, Gambit is open-source under the LGPL 2.1 and Apache 2.0 licenses. Its design emphasizes simplicity while achieving performance, making it suitable for research in compilers and concurrency. Variants like Gerbil Scheme and Termite Scheme were influenced by Gambit.",
      shortDesc:
        "Scheme implementation with both an interpreter and a C compiler, emphasizing simplicity and performance.",
      created: "1988",
      extensions: [".o6", ".scm"],
      extGithubPath: "gambit/gambit",
      extHomeURL: "https://gambitscheme.org",
      extWikipediaPath: "Gambit_(scheme_implementation)",
      githubStars: 1300,
      isTranspiler: true,
      keywords: ["compilers", "concurrency", "gambit", "lisp", "scheme"],
      releases: [
        { version: "4.9.5", name: "Gambit 4.9.5", date: "2023-07-01" },
      ],
    })
    .relCompilesTo.add("pl+c")
    .relDialectOf.add("pl+lisp", "pl+scheme")
    .relImplements.add("pl+scheme")
    .relInfluencedBy.add("pl+lisp", "pl+scheme")
    .relLicenses.add("lic+apache", "lic+lgpl")
    .relParadigms.add(
      "para+functional",
      "para+general-purpose",
      "para+imperative",
      "para+metaprogramming",
      "para+multi",
    )
    .relPlatforms.add("plat+cross", "plat+x86-64")
    .relTags.add("tag+compiler", "tag+interpreters")
    .relTypeSystems.add("tsys+dynamic", "tsys+latent", "tsys+strong")
    .relWrittenWith.add("pl+c");
}
