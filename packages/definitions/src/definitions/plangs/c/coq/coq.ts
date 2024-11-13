import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+coq", {
      name: "Coq",
      description:
        "Coq is an interactive theorem prover first released in 1989. It allows for expressing mathematical assertions, mechanically checks proofs of these assertions, helps find formal proofs, and extracts a certified program from the constructive proof of its formal specification. Coq works within the theory of the calculus of inductive constructions, a derivative of the calculus of constructions. Coq is not an automated theorem prover but includes automatic theorem proving tactics (procedures) and various decision procedures.",
      keywords: ["coq"],
      websites: [
        { title: "coq.inria.fr", href: "https://coq.inria.fr/", kind: "homepage" },
        { title: "Coq", href: "https://en.wikipedia.org/wiki/Coq_(software)", kind: "wikipedia" },
        { title: "Coq on Reddit", kind: "reddit", href: "https://reddit.com/r/Coq" },
        { title: "Coq on Wikipedia", kind: "wikipedia", href: "https://en.wikipedia.org/wiki/Coq" },
      ],
      year: 1989,
      isTranspiler: false,
      isMainstream: false,
      releases: [
        { version: "4.10", date: "1989-01-01" },
        { version: "8.19.2", date: "2024-01-01" },
      ],
      stackovTags: ["coq"],
      githubName: "Coq",
      languishRanking: 142,
      githubLangId: "69",
      githubColor: "#d0b68c",
      githubPopular: false,
      githubType: "programming",
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
