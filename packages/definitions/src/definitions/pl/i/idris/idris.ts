import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+idris", {
      name: "Idris",
      description:
        "Idris is a purely-functional programming language, designed for Type-Driven Development with dependent types, optional lazy evaluation, and features such as a totality checker. It serves as both a general-purpose language and a proof assistant.",
      keywords: ["dependent types", "functional programming", "idris", "type-driven development"],
      extensions: [".idr", ".lidr"],
      year: 2007,
      releases: [
        { version: "1.3.4", name: "Idris 1.3.4", date: "2021-10-22" },
        { version: "0.7.0", name: "Idris 2 v0.7.0", date: "2023-12-22" },
      ],
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
    })
    .addInfluencedBy(["pl+agda", "pl+clean", "pl+coq", "pl+f-sharp", "pl+haskell", "pl+rust"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+functional"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+interpreters", "tag+proofs"])
    .addTypeSystems(["tsys+dependent", "tsys+inferred", "tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
