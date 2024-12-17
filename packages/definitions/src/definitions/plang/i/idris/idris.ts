import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+idris", {
      name: "Idris",
      description:
        "Idris is a purely-functional programming language, designed for Type-Driven Development with dependent types, optional lazy evaluation, and features such as a totality checker. It serves as both a general-purpose language and a proof assistant.",
      shortDesc: "Idris is a purely-functional language for Type-Driven Development with dependent types and optional lazy evaluation.",
      created: "2007",
      extensions: [".idr", ".lidr"],
      extGithubPath: "idris-lang/Idris2",
      extHomeURL: "http://idris-lang.org/",
      extRedditPath: "Idris",
      extWikipediaPath: "Idris_(programming_language)",
      githubColor: "#b30000",
      githubLangId: "165",
      githubName: "Idris",
      githubPopular: false,
      githubStars: 2500,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["dependent types", "functional programming", "idris", "type-driven development"],
      languishRanking: 274,
      releases: [{ version: "0.7.0", name: "Idris 2 v0.7.0", date: "2023-12-22" }],
      stackovTags: ["idris"],
    })
    .relInfluencedBy.add("pl+agda", "pl+clean", "pl+coq", "pl+f-sharp", "pl+haskell", "pl+rust")
    .relLicenses.add("lic+bsd")
    .relParadigms.add("para+functional")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+interpreters", "tag+proofs")
    .relTypeSystems.add("tsys+dependent", "tsys+inferred", "tsys+static", "tsys+strong");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
