import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+gleam", {
      name: "Gleam",
      description:
        "A general-purpose, functional programming language designed for reliability and scale, running on the Erlang VM BEAM, and compiles to both Erlang and JavaScript. It employs a type-safe, static, and inferred typing system which enhances its concurrent programming capabilities.",
      shortDesc:
        "A general-purpose, functional language that compiles to Erlang and JavaScript, featuring static, inferred typing for concurrent programming.",
      created: "2016",
      extensions: [".gleam"],
      extGithubPath: "gleam-lang/gleam",
      extHomeURL: "https://gleam.run",
      extRedditPath: "gleamlang",
      extWikipediaPath: "Gleam_(programming_language)",
      githubColor: "#ffaff3",
      githubLangId: "1054258749",
      githubName: "Gleam",
      githubPopular: false,
      githubStars: 18200,
      githubType: "programming",
      isTranspiler: true,
      keywords: ["concurrent", "erlang", "functional", "gleam", "javascript", "type-safe"],
      languishRanking: 150,
      releases: [{ version: "1.6.3", date: "2024-12-03" }],
      stackovTags: ["gleam"],
    })
    .relCompilesTo.add("pl+erlang", "pl+javascript")
    .relInfluencedBy.add("pl+elixir", "pl+erlang", "pl+go", "pl+javascript", "pl+ocaml", "pl+rust")
    .relLicenses.add("lic+apache")
    .relParadigms.add("para+concurrent", "para+functional", "para+multi")
    .relPlatforms.add("plat+apple", "plat+beam", "plat+bsd", "plat+cross", "plat+linux", "plat+web", "plat+windows")
    .relTags.add("tag+compiler", "tag+framework", "tag+interpreters")
    .relTypeSystems.add("tsys+inferred", "tsys+safe", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+rust");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
