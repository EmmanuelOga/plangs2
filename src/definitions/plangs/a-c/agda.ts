import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+agda",
    "Agda",
    {
      name: "Agda",
      websites: [
        { kind: "wikipedia", title: "Agda", href: "https://en.wikipedia.org/wiki/Agda_(programming_language)" },
        { kind: "wikipedia", title: "Agda", href: "https://en.wikipedia.org/wiki/Agda_(theorem_prover)" },
        { kind: "homepage", title: "wiki.portal.chalmers.se/agda", href: "http://wiki.portal.chalmers.se/agda" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/7/71/Agda%27s_official_logo.svg" }],
      releases: [
        { version: "1.0", date: "2007-01-01", kind: "first" },
        { version: "2.6.3", date: "2023-01-30", kind: "stable" },
      ],
      references: { license: [{ href: "http://code.haskell.org/Agda/LICENSE", title: "Agda license file" }] },
      extensions: [".agda", ".lagda"],
    },
    {
      implementations: ["pl+haskell"],
      influenced: ["pl+idris"],
      influences: ["pl+coq", "pl+epigram", "pl+haskell"],
      licenses: ["lic+bsd-s"],
      paradigms: ["para+functional"],
      people: [["person+ulf-norell", "designer"]],
      platforms: ["platf+cross-platform"],
      typeSystems: [
        "tsys+dependent",
        "tsys+inferred",
        "tsys+manifest",
        "tsys+nominative",
        "tsys+static",
        "tsys+strong",
      ],
    },
  );

  /**/
}
