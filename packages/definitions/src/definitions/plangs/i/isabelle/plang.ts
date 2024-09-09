import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+isabelle", {
      images: [{ kind: "other", title: "Isabelle", url: "/images/plangs/i/isabelle/other.png" }],
      name: "Isabelle",
      description:
        "The Isabelle automated theorem prover is a higher-order logic (HOL) theorem prover, written in Standard ML and Scala. As an LCF-style theorem prover, it is based on a small logical core (kernel) to increase the trustworthiness of proofs without requiring — yet supporting — explicit proof objects.",
      websites: [
        { href: "https://isabelle.in.tum.de/", title: "isabelle.in.tum.de", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Isabelle_(proof_assistant)", title: "Isabelle", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [],
    })
    .addInfluencedBy(["pl+haskell"])
    .addLicenses(["lic+bsd"])
    .addPlatforms(["platf+apple", "platf+linux", "platf+windows"])
    .addTags(["tag+modeling", "tag+wavelet"])
    .addWrittenIn(["pl+scala", "pl+standard-ml"]);
}
