import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+coq", {
      name: "Coq",
      description:
        "Coq is an interactive theorem prover first released in 1989. It allows for expressing mathematical assertions, mechanically checks proofs of these assertions, helps find formal proofs, and extracts a certified program from the constructive proof of its formal specification. Coq works within the theory of the calculus of inductive constructions, a derivative of the calculus of constructions. Coq is not an automated theorem prover but includes automatic theorem proving tactics (procedures) and various decision procedures, and is primarily used for formal proof and certification in programming languages and mathematics.",
      keywords: ["coq", "formal proof", "proof assistant", "theorem prover", "verification"],
      year: 1989,
      isMainstream: false,
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
    })
    .addInfluencedBy(["pl+ml", "pl+ocaml"])
    .addLicenses(["license+lgpl"])
    .addParadigms(["paradigm+declarative", "paradigm+functional", "paradigm+logic"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+interpreter", "tag+proofs"])
    .addTypeSystems(["tsys+dependent", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+ocaml"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
