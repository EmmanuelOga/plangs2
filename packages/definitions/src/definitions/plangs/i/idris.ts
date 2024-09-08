import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+idris", {
      images: [],
      name: "Idris",
      description:
        "Idris is a purely-functional programming language with dependent types, optional lazy evaluation, and features such as a totality checker. Idris may be used as a proof assistant, but is designed to be a general-purpose programming language similar to Haskell.",
      websites: [
        { href: "http://idris-lang.org/", title: "idris-lang.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Idris_(programming_language)", title: "Idris", kind: "wikipedia" },
      ],
      extensions: [".idr", ".lidr"],
      releases: [
        { version: "1.3.4", date: "2021-01-01" },
        { version: "0.7.0", date: "2023-01-01" },
      ],
    })
    .addInfluencedBy(["pl+agda", "pl+clean", "pl+coq", "pl+f-sharp", "pl+haskell", "pl+ml", "pl+rust"])
    .addLicenses(["lic+bsd"])
    .addParadigms(["para+functional"])
    .addPlatforms(["platf+cross"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);
}
