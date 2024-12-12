import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+agda", {
      name: "Agda",
      description:
        "Agda is a dependently typed functional programming language and proof assistant, originally developed at Chalmers University of Technology. It is used for writing and verifying proofs using a functional style, and it uniquely integrates programming and proving without a separate tactic language. Agda employs rich type systems such as dependent types, supporting inductive families and parameterized modules.",
      extensions: [".agda", ".lagda", ".lagda.md", ".lagda.rst", ".lagda.tex"],
      keywords: ["agda", "dependently typed", "linear logic", "proof assistant"],
      isTranspiler: false,
      releases: [
        { version: "1.0", date: "1995-01-01" },
        { version: "2.0", date: "2007-01-01" },
        { version: "2.7", date: "2024-08-16" },
      ],
      stackovTags: ["agda"],
      githubName: "Agda",
      languishRanking: 197,
      githubLangId: "12",
      githubColor: "#315665",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Agda_(programming_language)",
      extRedditPath: "agda",
      extHomeURL: "https://agda.readthedocs.io/en/latest/",
      created: "2007",
      shortDesc: "Agda is a dependently typed functional programming language and proof assistant used for writing and verifying proofs.",
      githubStars: 2500,
      extGithubPath: "agda/agda",
      ghRepoCreated: "2011-01-01",
    })
    .relInfluencedBy.add("pl+coq", "pl+haskell")
    .relLicenses.add("lic+bsd")
    .relParadigms.add("para+functional")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+automation", "tag+compiler", "tag+control", "tag+industrial", "tag+interpreters", "tag+proofs")
    .relTypeSystems.add("tsys+dependent", "tsys+inferred", "tsys+manifest", "tsys+nominal", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+haskell");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
