import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+reason", {
      name: "Reason",
      description:
        "Reason, also known as ReasonML, is a general-purpose, high-level, multi-parigm, functional and object-oriented programming language and syntax extension and toolchain for OCaml created by Jordan Walke, who also created the React framework, at Facebook. Reason leverages both the OCaml and JavaScript ecosystems, allowing it to compile to native code through OCaml's compiler toolchain and to JavaScript using the ReScript compiler.",
      keywords: ["ocaml", "reasonml"],
      extensions: [".re", ".rei"],
      year: 2016,
      isTranspiler: true,
      releases: [
        { version: "3.13.0", name: "", date: "2024-10-21" },
        { version: "3.12.0", name: "Reason 3.12.0", date: "2024-01-01" },
      ],
      stackovTags: ["reason"],
      githubName: "Reason",
      languishRanking: 245,
      githubLangId: "869538413",
      githubColor: "#ff5847",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Reason_(programming_language)|Reason_(syntax_extension_for_OCaml)",
      extRedditPath: "reasonml",
      extHomeURL: "https://reasonml.github.io/",
    })
    .addCompilesTo(["pl+javascript", "pl+ocaml"])
    .addDialectOf(["pl+ocaml"])
    .addInfluencedBy(["pl+javascript", "pl+ocaml"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+functional", "paradigm+modular", "paradigm+multi", "paradigm+oop"])
    .addPlatforms(["plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+app", "tag+compiler", "tag+framework", "tag+interpreters"])
    .addTypeSystems(["tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+ocaml"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
