import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tag.set("tag+proofs", {
    name: "Proof Assistant",
    description:
      "Software used to assist in proving mathematical theorems and verifying logical correctness.",
    extHomeURL: "https://en.wikipedia.org/wiki/Proof_assistant",
    keywords: ["formal verification", "proof assistant", "theorem proving"],
  });
}
