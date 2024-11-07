import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+isabelle", {
      name: "Isabelle",
      description:
        "The Isabelle automated theorem prover is a higher-order logic (HOL) theorem prover, written in Standard ML and Scala. As an LCF-style theorem prover, it is based on a small logical core (kernel) to increase the trustworthiness of proofs without requiring — yet supporting — explicit proof objects.",
      keywords: ["isabelle"],
      websites: [
        { title: "isabelle.in.tum.de", href: "https://isabelle.in.tum.de/", kind: "homepage" },
        { title: "Isabelle", href: "https://en.wikipedia.org/wiki/Isabelle_(proof_assistant)", kind: "wikipedia" },
      ],
      extensions: [".thy"],
      year: 1986,
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "2023", name: "Isabelle 2023", date: "2023-06-15" }],
    })
    .addInfluencedBy(["pl+haskell"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+dsl", "paradigm+logic"])
    .addPlatforms(["plat+apple", "plat+linux", "plat+windows"])
    .addTags([
      "tag+automation",
      "tag+framework",
      "tag+industrial",
      "tag+instrument_control",
      "tag+interpreter",
      "tag+modeling",
      "tag+proofs",
      "tag+wavelet",
    ])
    .addTypeSystems(["tsys+dependent", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+scala", "pl+standard-ml"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
