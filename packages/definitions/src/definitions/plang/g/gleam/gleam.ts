import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+gleam", {
      name: "Gleam",
      description:
        "Gleam is a general-purpose, functional programming language designed for reliability and scale, running on the Erlang VM BEAM, and compiles to both Erlang and JavaScript. It employs a type-safe, static, and inferred typing system which enhances its concurrent programming capabilities.",
      keywords: ["concurrent", "erlang", "functional", "gleam", "javascript", "type-safe"],
      extensions: [".gleam"],
      isTranspiler: true,
      releases: [{ version: "1.6.3", date: "2024-12-03" }],
      stackovTags: ["gleam"],
      githubName: "Gleam",
      languishRanking: 150,
      githubLangId: "1054258749",
      githubColor: "#ffaff3",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Gleam_(programming_language)",
      extRedditPath: "gleamlang",
      extHomeURL: "https://gleam.run",
      created: "2016",
      shortDesc:
        "Gleam is a general-purpose, functional language that compiles to Erlang and JavaScript, featuring static, inferred typing for concurrent programming.",
      githubStars: 18200,
      extGithubPath: "gleam-lang/gleam",
      ghRepoCreated: "2016-12-17",
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
