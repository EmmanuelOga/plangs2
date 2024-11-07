import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+reason", {
      name: "Reason",
      description:
        "Reason, also known as ReasonML, is a general-purpose, high-level, multi-paradigm, functional and object-oriented programming language and syntax extension and toolchain for OCaml created by Jordan Walke, who also created the React framework, at Facebook. Reason uses many syntax elements from JavaScript, compiles to native code using OCaml's compiler toolchain, and can compile to JavaScript using the ReScript compiler.",
      keywords: ["reason", "reasonml"],
      websites: [
        { title: "Reason", href: "https://reasonml.github.io/", kind: "homepage" },
        { title: "Reason", href: "https://en.wikipedia.org/wiki/Reason_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".re", ".rei"],
      year: 2016,
      isTranspiler: true,
      isMainstream: false,
      releases: [{ version: "3.12.0", name: "Reason 3.12.0", date: "2024-01-01" }],
    })
    .addDialectOf(["pl+ocaml"])
    .addInfluencedBy(["pl+javascript", "pl+ocaml"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+functional", "paradigm+multi", "paradigm+oop"])
    .addPlatforms(["plat+cross", "plat+linux", "plat+mac", "plat+windows"])
    .addTags(["tag+app", "tag+compiler", "tag+framework", "tag+interpreter"])
    .addTypeSystems(["tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+ocaml"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
