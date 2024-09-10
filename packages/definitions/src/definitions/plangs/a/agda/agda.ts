import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+agda", {
      name: "Agda",
      description:
        "Agda is a dependently typed functional programming language originally developed by Ulf Norell at Chalmers University of Technology with implementation described in his PhD thesis. The original Agda system was developed at Chalmers by Catarina Coquand in 1999. The current version, originally known as Agda 2, is a full rewrite, which should be considered a new language that shares a name and tradition.",
      firstAppeared: "2007-01-01",
      extensions: [".agda", ".lagda", ".lagda.md", ".lagda.rst", ".lagda.tex"],
      websites: [
        { href: "http://wiki.portal.chalmers.se/agda", title: "wiki.portal.chalmers.se/agda", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/Agda_(programming_language)", title: "Agda", kind: "wikipedia" },
      ],
      releases: [{ version: "2.6.3", date: "2023-01-01" }],
      images: [{ kind: "logo", title: "Agda", url: "/images/plangs/a/agda/logo.png" }],
    })
    .addInfluencedBy(["pl+coq", "pl+haskell"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+functional"])
    .addPlatforms(["plat+cross"])
    .addTypeSystems(["tsys+dependent", "tsys+inferred", "tsys+manifest", "tsys+nominal", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+haskell"]);
}
