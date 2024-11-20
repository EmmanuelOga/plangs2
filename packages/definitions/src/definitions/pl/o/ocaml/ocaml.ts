import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+ocaml", {
      name: "OCaml",
      description:
        "OCaml (/oʊˈkæməl/ oh-KAM-əl, formerly Objective Caml) is a general-purpose, high-level, multi-paradigm programming language which extends the Caml dialect of ML with object-oriented features. OCaml was created in 1996 by Xavier Leroy, Jérôme Vouillon, Damien Doligez, Didier Rémy, Ascánder Suárez, and others.",
      keywords: ["functional", "imperative", "ml", "mult-paradigm", "ocaml"],
      extensions: [".ml", ".mli"],
      year: 1996,
      releases: [
        { version: "5.2.0", name: "OCaml 5.2.0", date: "2024-05-13" },
        { version: "4.14.2", name: "LTS 4.14.2" },
      ],
      stackovTags: ["ocaml"],
      githubName: "OCaml",
      languishRanking: 71,
      githubLangId: "255",
      githubColor: "#ef7a08",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "OCaml",
      extRedditPath: "ocaml",
      extHomeURL: "https://ocaml.org/",
    })
    .addInfluencedBy(["pl+c", "pl+pascal", "pl+standard-ml"])
    .addLicenses(["license+lgpl"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+modular", "paradigm+multi", "paradigm+oop"])
    .addPlatforms(["plat+apple", "plat+arm", "plat+cross", "plat+linux", "plat+riscv", "plat+windows", "plat+x86-64"])
    .addTags(["tag+analysis", "tag+automation", "tag+compiler", "tag+industrial", "tag+control", "tag+interpreters", "tag+proofs", "tag+viz"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
