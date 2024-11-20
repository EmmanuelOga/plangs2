import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+agda", {
      name: "Agda",
      description:
        "Agda is a dependently typed functional programming language and proof assistant, originally developed by Ulf Norell at Chalmers University of Technology. It is built on intuitionistic type theory and offers features such as inductive families, parametrized modules, and mixfix operators. Agda assists in writing and checking proofs with a focus on interactive programming. Unlike other proof assistants like Coq, Agda is distinguished by its lack of a separate tactics language, relying instead on a functional programming style for proofs.",
      extensions: [".agda", ".lagda", ".lagda.md", ".lagda.rst", ".lagda.tex"],
      keywords: ["agda", "dependently typed", "proof assistant"],
      isTranspiler: true,
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
      extHomeURL: "http://wiki.portal.chalmers.se/agda",
      created: "2007",
    })
    .addInfluencedBy(["pl+coq", "pl+haskell"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+functional"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+automation", "tag+compiler", "tag+control", "tag+industrial", "tag+interpreters", "tag+proofs"])
    .addTypeSystems(["tsys+dependent", "tsys+inferred", "tsys+manifest", "tsys+nominal", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+haskell"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
