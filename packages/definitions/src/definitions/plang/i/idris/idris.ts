import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+idris", {
      name: "Idris",
      description:
        "Idris is a purely-functional programming language, designed for Type-Driven Development with dependent types, optional lazy evaluation, and features such as a totality checker. It serves as both a general-purpose language and a proof assistant.",
      keywords: ["dependent types", "functional programming", "idris", "type-driven development"],
      extensions: [".idr", ".lidr"],
      releases: [{ version: "0.7.0", name: "Idris 2 v0.7.0", date: "2023-12-22" }],
      stackovTags: ["idris"],
      githubName: "Idris",
      languishRanking: 274,
      githubLangId: "165",
      githubColor: "#b30000",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Idris_(programming_language)",
      extRedditPath: "Idris",
      extHomeURL: "http://idris-lang.org/",
      created: "2007",
      isTranspiler: false,
      shortDesc: "Idris is a purely-functional language for Type-Driven Development with dependent types and optional lazy evaluation.",
      githubStars: 2500,
      extGithubPath: "idris-lang/Idris2",
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
