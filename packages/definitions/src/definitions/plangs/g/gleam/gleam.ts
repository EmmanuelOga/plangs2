import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+gleam", {
      name: "Gleam",
      description:
        "Gleam is a general-purpose, concurrent, functional high-level programming language that compiles to Erlang or JavaScript source code.",
      keywords: ["concurrent", "erlang", "functional", "gleam", "javascript"],
      websites: [
        { title: "gleam.run", href: "https://gleam.run/", kind: "homepage" },
        { title: "Gleam", href: "https://en.wikipedia.org/wiki/Gleam_(programming_language)", kind: "wikipedia" },
        { title: "Gleam on Reddit", kind: "reddit", href: "https://reddit.com/r/gleamlang" },
      ],
      extensions: [".gleam"],
      year: 2016,
      isTranspiler: true,
      isMainstream: false,
      releases: [{ version: "1.4.1", name: "Version 1.4.1", date: "2024-01-01" }],
      stackovTags: ["gleam"],
      githubName: "Gleam",
      languishRanking: 150,
      githubLangId: "1054258749",
      githubColor: "#ffaff3",
      githubPopular: false,
      githubType: "programming",
    })
    .addCompilesTo(["pl+erlang", "pl+javascript"])
    .addInfluencedBy(["pl+elixir", "pl+erlang", "pl+go", "pl+javascript", "pl+ocaml", "pl+rust"])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+concurrent", "paradigm+functional", "paradigm+multi"])
    .addPlatforms(["plat+apple", "plat+beam", "plat+bsd", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+compiler", "tag+framework", "tag+interpreter"])
    .addTypeSystems(["tsys+inferred", "tsys+safe", "tsys+static"])
    .addWrittenIn(["pl+rust"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
