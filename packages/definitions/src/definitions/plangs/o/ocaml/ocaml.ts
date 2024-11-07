import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+ocaml", {
      name: "OCaml",
      description:
        "OCaml (/oʊˈkæməl/ oh-KAM-əl, formerly Objective Caml) is a general-purpose, high-level, multi-paradigm programming language which extends the Caml dialect of ML with object-oriented features. OCaml was created in 1996 by Xavier Leroy, Jérôme Vouillon, Damien Doligez, Didier Rémy, Ascánder Suárez, and others.",
      keywords: ["ocaml", "caml"],
      websites: [
        { title: "OCaml", href: "https://ocaml.org/", kind: "homepage" },
        { title: "OCaml", href: "https://en.wikipedia.org/wiki/OCaml", kind: "wikipedia" },
      ],
      extensions: [".ml", ".mli"],
      year: 1996,
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "5.2.0", name: "OCaml 5.2.0", date: "2024-01-01" }],
    })
    .addDialectOf(["pl+ml"])
    .addInfluencedBy(["pl+c", "pl+ml", "pl+pascal", "pl+standard-ml"])
    .addLicenses(["license+lgpl"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+modular", "paradigm+multi", "paradigm+oop"])
    .addPlatforms(["plat+apple", "plat+cross", "plat+linux", "plat+riscv", "plat+windows", "plat+x86-64"])
    .addTags([
      "tag+analysis",
      "tag+automation",
      "tag+compiler",
      "tag+industrial",
      "tag+instrument_control",
      "tag+interpreter",
      "tag+proofs",
      "tag+viz",
    ])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
