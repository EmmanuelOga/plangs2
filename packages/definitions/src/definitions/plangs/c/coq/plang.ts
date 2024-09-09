import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+coq", {
      name: "Coq (software)",
      description:
        "Coq is an interactive theorem prover first released in 1989. It allows for expressing mathematical assertions, mechanically checks proofs of these assertions, helps find formal proofs, and extracts a certified program from the constructive proof of its formal specification. Coq works within the theory of the calculus of inductive constructions, a derivative of the calculus of constructions. Coq is not an automated theorem prover but includes automatic theorem proving tactics (procedures) and various decision procedures.",
      websites: [
        { href: "https://coq.inria.fr/", title: "coq.inria.fr", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/Coq_(software)", title: "Coq (software)", kind: "wikipedia" },
      ],
      releases: [
        { version: "4.10", date: "1989-01-01" },
        { version: "8.19.2", date: "2024-01-01" },
      ],
      images: [{ kind: "logo", title: "Coq (software)", url: "/images/plangs/c/coq/logo.png" }],
    })
    .addInfluencedBy(["pl+ml", "pl+ocaml"])
    .addPlatforms(["platf+cross"])
    .addTags(["tag+proofs"])
    .addWrittenIn(["pl+ocaml"]);
}
