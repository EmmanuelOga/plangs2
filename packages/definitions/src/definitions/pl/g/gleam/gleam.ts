import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+gleam", {
      name: "Gleam",
      description:
        "Gleam is a general-purpose, concurrent, functional high-level programming language that compiles to Erlang or JavaScript source code. It features a type-safe, static, inferred typing discipline and runs on the Erlang virtual machine BEAM, known for its reliability, scalability, and fault tolerance.",
      keywords: ["concurrent", "erlang", "functional", "gleam", "javascript", "type-safe"],
      extensions: [".gleam"],
      isTranspiler: true,
      releases: [
        { version: "1.0.0", name: "Version 1.0.0", date: "2024-03-04" },
        { version: "1.5.1", name: "Version 1.5.1", date: "2024-09-26" },
        { version: "1.4.1", name: "Version 1.4.1", date: "2024-01-01" },
      ],
      stackovTags: ["gleam"],
      githubName: "Gleam",
      languishRanking: 150,
      githubLangId: "1054258749",
      githubColor: "#ffaff3",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Gleam_(programming_language)",
      extRedditPath: "gleamlang",
      extHomeURL: "https://gleam.run/",
      created: "2016",
    })
    .relCompilesTo.add(["pl+javascript"])
    .relInfluencedBy.add(["pl+elixir", "pl+erlang", "pl+go", "pl+javascript", "pl+ocaml", "pl+rust"])
    .relLicense.add(["lic+apache"])
    .relParadigm.add(["para+concurrent", "para+functional", "para+multi"])
    .relPlatform.add(["plat+apple", "plat+beam", "plat+bsd", "plat+cross", "plat+linux", "plat+windows"])
    .relTag.add(["tag+compiler", "tag+framework", "tag+interpreters"])
    .relTypeSystem.add(["tsys+inferred", "tsys+safe", "tsys+static"])
    .relWrittenInPlang.add(["pl+rust"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
