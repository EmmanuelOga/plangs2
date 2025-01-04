import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+agda", {
      name: "Agda",
      description:
        "Dependently typed functional programming language and proof assistant, originally developed at Chalmers University of Technology. It is used for writing and verifying proofs using a functional style, and it uniquely integrates programming and proving without a separate tactic language. Agda employs rich type systems such as dependent types, supporting inductive families and parameterized modules.",
      shortDesc:
        "Dependently typed functional programming language and proof assistant used for writing and verifying proofs.",
      created: "2007",
      extensions: [".agda", ".lagda", ".lagda.md", ".lagda.rst", ".lagda.tex"],
      extGithubPath: "agda/agda",
      extHomeURL: "https://agda.readthedocs.io/en/latest/",
      extRedditPath: "agda",
      extWikipediaPath: "Agda_(programming_language)",
      githubColor: "#315665",
      githubLangId: "12",
      githubName: "Agda",
      githubPopular: false,
      githubStars: 2500,
      githubType: "programming",
      isTranspiler: false,
      keywords: [
        "agda",
        "dependently typed",
        "linear logic",
        "proof assistant",
      ],
      languishRanking: 197,
      releases: [
        { version: "1.0", date: "1995-01-01" },
        { version: "2.0", date: "2007-01-01" },
        { version: "2.7", date: "2024-08-16" },
      ],
      stackovTags: ["agda"],
    })
    .relInfluencedBy.add("pl+coq", "pl+haskell")
    .relLicenses.add("lic+bsd")
    .relParadigms.add("para+functional")
    .relPlatforms.add("plat+cross")
    .relTags.add(
      "tag+automation",
      "tag+compiler",
      "tag+control",
      "tag+industrial",
      "tag+interpreters",
      "tag+proofs",
    )
    .relTypeSystems.add(
      "tsys+dependent",
      "tsys+inferred",
      "tsys+manifest",
      "tsys+nominal",
      "tsys+static",
      "tsys+strong",
    )
    .relWrittenWith.add("pl+haskell");
}
