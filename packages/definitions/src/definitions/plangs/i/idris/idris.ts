import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+idris", {
      name: "Idris",
      description:
        "Idris is a purely-functional programming language with dependent types, optional lazy evaluation, and features such as a totality checker. Idris may be used as a proof assistant, but is designed to be a general-purpose programming language similar to Haskell.",
      keywords: ["idris"],
      websites: [
        { title: "idris-lang.org", href: "http://idris-lang.org/", kind: "homepage" },
        { title: "Idris", href: "https://en.wikipedia.org/wiki/Idris_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".idr", ".lidr"],
      year: 2007,
      isTranspiler: false,
      isMainstream: false,
      releases: [
        { version: "1.3.4", name: "Idris 1.3.4", date: "2021-01-01" },
        { version: "0.7.0", name: "Idris 0.7.0", date: "2023-01-01" },
      ],
    })
    .addInfluencedBy(["pl+agda", "pl+clean", "pl+coq", "pl+f-sharp", "pl+haskell", "pl+ml", "pl+rust"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+functional"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+interpreter", "tag+proofs"])
    .addTypeSystems(["tsys+dependent", "tsys+inferred", "tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
