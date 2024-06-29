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
        { version: "unknown", kind: "stable" },
        { version: "unknown", date: "2010-01-01", kind: "stable" },
        { version: "unknown", date: "2020-01-01", kind: "preview" },
      ],
      extensions: [".hs", ".lhs"],
    },
    {
      dialects: ["pl+elm", "pl+gofer", "pl+hume"],
      implementations: ["pl+glasgow-haskell-compiler", "pl+hugs", "pl+yhc"],
      influences: [
        "pl+sml",
        "pl+scheme",
        "pl+lisp",
        "pl+miranda",
        "pl+ffp",
        "pl+ml",
        "pl+sasl",
        "pl+orwell",
        "pl+iswim",
        "pl+raku",
        "pl+clean",
        "pl+fp",
        "pl+gofer",
        "pl+hope",
        "pl+id",
        "pl+kent-recursive-calculator",
        "pl+sisal",
      ],
      paradigms: ["para+functional"],
      people: [
        "person+lennart-augustsson",
        "person+paul-hudak",
        "person+john-hughes",
        "person+simon-peyton-jones",
        "person+john-launchbury",
        "person+erik-meijer",
        "person+philip-wadler",
      ],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );
}
