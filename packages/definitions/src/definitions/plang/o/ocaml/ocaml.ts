import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+ocaml", {
      name: "OCaml",
      description:
        "General-purpose, high-level, multi-paradigm programming language which extends the Caml dialect of ML with object-oriented features. OCaml was created in 1996 by Xavier Leroy, Jérôme Vouillon, Damien Doligez, Didier Rémy, Ascánder Suárez, and others.",
      shortDesc: "General-purpose, multi-paradigm language extending Caml with OO features.",
      created: "1996",
      extensions: [".ml", ".mli"],
      extGithubPath: "ocaml/ocaml",
      extHomeURL: "https://ocaml.org/",
      extRedditPath: "ocaml",
      extWikipediaPath: "OCaml",
      githubColor: "#ef7a08",
      githubLangId: "255",
      githubName: "OCaml",
      githubPopular: false,
      githubStars: 5500,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["functional", "imperative", "ml", "mult-paradigm", "ocaml"],
      languishRanking: 71,
      releases: [
        { version: "5.2.0", name: "OCaml 5.2.0", date: "2024-05-13" },
        { version: "4.14.2", name: "LTS 4.14.2" },
      ],
      stackovTags: ["ocaml"],
    })
    .relInfluencedBy.add("pl+c", "pl+pascal", "pl+standard-ml")
    .relLicenses.add("lic+lgpl")
    .relParadigms.add("para+functional", "para+imperative", "para+modular", "para+multi", "para+oop")
    .relPlatforms.add("plat+apple", "plat+arm", "plat+cross", "plat+linux", "plat+riscv", "plat+windows", "plat+x86-64")
    .relTags.add("tag+analysis", "tag+automation", "tag+compiler", "tag+control", "tag+industrial", "tag+interpreters", "tag+proofs", "tag+viz")
    .relTypeSystems.add("tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural")
    .relWrittenWith.add("pl+c");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
