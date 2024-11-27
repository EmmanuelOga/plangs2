import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+coq", {
      name: "Coq",
      description:
        "Coq is an interactive theorem prover first released in 1989. It allows for expressing mathematical assertions, mechanically checks proofs of these assertions, helps find formal proofs, and extracts a certified program from the constructive proof of its formal specification. Coq works within the theory of the calculus of inductive constructions, a derivative of the calculus of constructions. Coq is not an automated theorem prover but includes automatic theorem proving tactics (procedures) and various decision procedures, and is primarily used for formal proof and certification in programming languages and mathematics.",
      keywords: ["coq", "formal proof", "proof assistant", "theorem prover", "verification"],
      releases: [
        { version: "4.10", name: "Initial Release", date: "1989-05-01" },
        { version: "8.20.0", name: "Stable Release", date: "2024-09-03" },
        { version: "8.19.2", date: "2024-01-01" },
      ],
      stackovTags: ["coq"],
      githubName: "Coq",
      languishRanking: 142,
      githubLangId: "69",
      githubColor: "#d0b68c",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Coq",
      extRedditPath: "Coq",
      extHomeURL: "https://coq.inria.fr/",
      created: "1989",
    })
    .relInfluencedBy.add(["pl+ocaml"])
    .relLicense.add(["lic+lgpl"])
    .relParadigm.add(["para+declarative", "para+functional", "para+logic"])
    .relPlatform.add(["plat+cross"])
    .relTag.add(["tag+interpreters", "tag+proofs"])
    .relTypeSystem.add(["tsys+dependent", "tsys+static", "tsys+strong"])
    .relWrittenInPlang.add(["pl+ocaml"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
