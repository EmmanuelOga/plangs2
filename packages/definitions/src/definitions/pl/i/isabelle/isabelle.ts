import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+isabelle", {
      name: "Isabelle",
      description:
        "Isabelle is an automated theorem prover that allows mathematical formulas to be expressed in a formal language and provides tools for proving those formulas in a logical calculus. It is written in Standard ML and Scala, supporting both procedural and declarative proof styles. Isabelle is designed to be a flexible IDE for formal methods and supports a wide variety of formal proofs and methods, notably higher-order logic (HOL).",
      keywords: ["automated theorem prover", "formal methods", "isabelle"],
      extensions: [".thy"],
      year: 1986,
      releases: [
        { version: "2024", name: "Isabelle2024", date: "2024-05" },
        { version: "2023", name: "Isabelle 2023", date: "2023-06-15" },
      ],
      stackovTags: ["isabelle"],
      githubName: "Isabelle",
      languishRanking: 317,
      githubLangId: "170",
      githubColor: "#FEFE00",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Isabelle_(proof_assistant)",
      extRedditPath: "isabelle",
      extHomeURL: "https://isabelle.in.tum.de/",
    })
    .addInfluencedBy(["pl+haskell"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+declarative", "paradigm+dsl", "paradigm+logic"])
    .addPlatforms(["plat+apple", "plat+linux", "plat+windows"])
    .addTags(["tag+automation", "tag+framework", "tag+industrial", "tag+control", "tag+interpreters", "tag+modeling", "tag+proofs", "tag+wavelet"])
    .addTypeSystems(["tsys+dependent", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+scala", "pl+standard-ml"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
