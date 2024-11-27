import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+ocaml", {
      name: "OCaml",
      description:
        "OCaml (/oʊˈkæməl/ oh-KAM-əl, formerly Objective Caml) is a general-purpose, high-level, multi-paradigm programming language which extends the Caml dialect of ML with object-oriented features. OCaml was created in 1996 by Xavier Leroy, Jérôme Vouillon, Damien Doligez, Didier Rémy, Ascánder Suárez, and others.",
      keywords: ["functional", "imperative", "ml", "mult-paradigm", "ocaml"],
      extensions: [".ml", ".mli"],
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
      created: "1996",
    })
    .relInfluencedBy.add(["pl+c", "pl+pascal", "pl+standard-ml"])
    .relLicense.add(["lic+lgpl"])
    .relParadigm.add(["para+functional", "para+imperative", "para+modular", "para+multi", "para+oop"])
    .relPlatform.add(["plat+apple", "plat+arm", "plat+cross", "plat+linux", "plat+riscv", "plat+windows", "plat+x86-64"])
    .relTag.add(["tag+analysis", "tag+automation", "tag+compiler", "tag+control", "tag+industrial", "tag+interpreters", "tag+proofs", "tag+viz"])
    .relTypeSystem.add(["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"])
    .relWrittenInPlang.add(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
