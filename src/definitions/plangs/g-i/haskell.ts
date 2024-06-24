import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+haskell",
    "Haskell",
    {
      name: "Haskell",
      websites: [
        { kind: "wikipedia", title: "Haskell", href: "https://en.wikipedia.org/wiki/Haskell_(programming_language)" },
        { kind: "wikipedia", title: "Haskell", href: "https://en.wikipedia.org/wiki/Haskell" },
        { kind: "homepage", title: "haskell.org", href: "http://haskell.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/4/4d/Logo_of_the_Haskell_programming_language.svg",
        },
      ],
      releases: [
        { version: "unknown", date: "1990-01-01", kind: "first" },
        { version: "unknown", date: "2010-01-01", kind: "stable" },
        { version: "unknown", date: "2020-01-01", kind: "preview" },
      ],
      references: {
        stable_release: [
          {
            href: "http://www.haskell.org/pipermail/haskell/2009-November/021750.html",
            title: "Announcing Haskell 2010",
          },
        ],
        preview_release: [
          {
            href: "https://mail.haskell.org/pipermail/haskell-prime/2016-April/004050.html",
            title: "ANN: Haskell Prime 2020 committee has formed",
          },
        ],
      },
      extensions: [".hs", ".lhs"],
    },
    {
      dialects: ["pl+elm", "pl+gofer", "pl+hume"],
      implementations: ["pl+glasgow-haskell-compiler", "pl+hugs", "pl+yhc"],
      influences: [
        "pl+clean",
        "pl+ffp",
        "pl+fp",
        "pl+gofer",
        "pl+hope",
        "pl+id",
        "pl+iswim",
        "pl+kent-recursive-calculator",
        "pl+lisp",
        "pl+miranda",
        "pl+ml",
        "pl+orwell",
        "pl+raku",
        "pl+sasl",
        "pl+scheme",
        "pl+sisal",
        "pl+sml",
      ],
      paradigms: ["para+functional"],
      people: [
        ["person+erik-meijer", "designer"],
        ["person+john-hughes", "designer"],
        ["person+john-launchbury", "designer"],
        ["person+lennart-augustsson", "designer"],
        ["person+paul-hudak", "designer"],
        ["person+philip-wadler", "designer"],
        ["person+simon-peyton-jones", "designer"],
      ],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );

  /**/
}
