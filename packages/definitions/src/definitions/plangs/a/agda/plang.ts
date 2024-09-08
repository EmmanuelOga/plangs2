import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+agda", {
      images: [{ kind: "logo", title: "Agda" }],
      name: "Agda",
      description:
        "Agda is a dependently typed functional programming language originally developed by Ulf Norell at Chalmers University of Technology with implementation described in his PhD thesis. The original Agda system was developed at Chalmers by Catarina Coquand in 1999. The current version, originally known as Agda 2, is a full rewrite, which should be considered a new language that shares a name and tradition.",
      websites: [
        { href: "http://wiki.portal.chalmers.se/agda", title: "wiki.portal.chalmers.se/agda", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/Agda_(programming_language)", title: "Agda", kind: "wikipedia" },
      ],
      extensions: [".agda", ".lagda", ".lagda.md", ".lagda.rst", ".lagda.tex"],
      releases: [
        { version: "1.0", date: "2007-01-01" },
        { version: "2.6.3", date: "2023-01-01" },
      ],
    })
    .addInfluencedBy(["pl+coq", "pl+haskell"])
    .addLicenses(["lic+bsd"])
    .addParadigms(["para+functional"])
    .addPlatforms(["platf+cross"])
    .addTypeSystems(["tsys+dependent", "tsys+inferred", "tsys+manifest", "tsys+nominal", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+haskell"]);
}
