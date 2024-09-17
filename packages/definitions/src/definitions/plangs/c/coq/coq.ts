import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+coq", {
      name: "Coq",
      description:
        "Coq is an interactive theorem prover first released in 1989. It allows for expressing mathematical assertions, mechanically checks proofs of these assertions, helps find formal proofs, and extracts a certified program from the constructive proof of its formal specification. Coq works within the theory of the calculus of inductive constructions, a derivative of the calculus of constructions. Coq is not an automated theorem prover but includes automatic theorem proving tactics (procedures) and various decision procedures.",
      websites: [
        { href: "https://coq.inria.fr/", title: "coq.inria.fr", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Coq_(software)", title: "Coq", kind: "wikipedia" },
      ],
      releases: [
        { version: "4.10", date: "1989-01-01" },
        { version: "8.19.2", date: "2024-01-01" },
      ],
      images: [{ kind: "logo", title: "Coq", url: "/images/plangs/c/coq/logo.png" }],
    })
    .addInfluencedBy(["pl+ml", "pl+ocaml"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+app", "tag+interpreter", "tag+proofs"])
    .addWrittenIn(["pl+ocaml"]);
}
