import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+isabelle", {
      name: "Isabelle",
      description:
        "Automated theorem prover that allows mathematical formulas to be expressed in a formal language and provides tools for proving those formulas in a logical calculus. It is written in Standard ML and Scala, supporting both procedural and declarative proof styles. Isabelle is designed to be a flexible IDE for formal methods and supports a wide variety of formal proofs and methods, notably higher-order logic (HOL).",
      shortDesc: "Automated theorem prover for formalizing mathematical proofs in higher-order logic.",
      created: "1986",
      extensions: [".thy"],
      extHomeURL: "https://isabelle.in.tum.de/",
      extRedditPath: "isabelle",
      extWikipediaPath: "Isabelle_(proof_assistant)",
      githubColor: "#FEFE00",
      githubLangId: "170",
      githubName: "Isabelle",
      githubPopular: false,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["automated theorem prover", "formal methods", "isabelle"],
      languishRanking: 317,
      releases: [
        { version: "2024", name: "Isabelle2024", date: "2024-05" },
        { version: "2023", name: "Isabelle 2023", date: "2023-06-15" },
      ],
      stackovTags: ["isabelle"],
    })
    .relInfluencedBy.add("pl+haskell")
    .relLicenses.add("lic+bsd")
    .relParadigms.add("para+declarative", "para+dsl", "para+logic")
    .relPlatforms.add("plat+apple", "plat+linux", "plat+windows")
    .relTags.add("tag+automation", "tag+control", "tag+framework", "tag+industrial", "tag+interpreters", "tag+modeling", "tag+proofs", "tag+wavelet")
    .relTypeSystems.add("tsys+dependent", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+scala", "pl+standard-ml");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
