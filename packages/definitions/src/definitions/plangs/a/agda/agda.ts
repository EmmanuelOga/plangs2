import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+agda", {
      name: "Agda",
      description:
        "Agda is a dependently typed functional programming language originally developed by Ulf Norell at Chalmers University of Technology with implementation described in his PhD thesis. The original Agda system was developed at Chalmers by Catarina Coquand in 1999. The current version, originally known as Agda 2, is a full rewrite, which should be considered a new language that shares a name and tradition.",
      year: 2007,
      extensions: [".agda", ".lagda", ".lagda.md", ".lagda.rst", ".lagda.tex"],
      keywords: ["agda"],
      websites: [
        { title: "wiki.portal.chalmers.se/agda", href: "http://wiki.portal.chalmers.se/agda", kind: "other" },
        { title: "Agda", href: "https://en.wikipedia.org/wiki/Agda_(programming_language)", kind: "wikipedia" },
        { title: "Agda on Reddit", kind: "reddit", href: "https://reddit.com/r/agda" },
      ],
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "2.6.3", name: "Agda 2.6.3", date: "2023-01-01" }],
      stackovTags: ["agda"],
      githubName: "Agda",
      languishRanking: 197,
      githubLangId: "12",
      githubColor: "#315665",
      githubPopular: false,
      githubType: "programming",
    })
    .addInfluencedBy(["pl+coq", "pl+haskell"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+functional"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+automation", "tag+compiler", "tag+industrial", "tag+instrument_control", "tag+interpreter", "tag+proofs"])
    .addTypeSystems(["tsys+dependent", "tsys+inferred", "tsys+manifest", "tsys+nominal", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+haskell"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
