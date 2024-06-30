import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+haskell",
    {
      name: "Haskell",
      websites: [
        { kind: "wikipedia", title: "Haskell", href: "https://en.wikipedia.org/wiki/Haskell_(programming_language)" },
        { kind: "wikipedia", title: "Haskell", href: "https://en.wikipedia.org/wiki/Haskell" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/4/4d/Logo_of_the_Haskell_programming_language.svg",
        },
      ],
      releases: [
        { version: "unknown", date: "2010-01-01", kind: "stable" },
        { version: "unknown", date: "2020-01-01", kind: "preview" },
      ],
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
        "pl+poly-slashml",
        "pl+raku",
        "pl+sasl",
        "pl+scheme",
        "pl+sisal",
        "pl+sml",
      ],
      people: [
        "person+erik-meijer",
        "person+john-hughes",
        "person+john-launchbury",
        "person+lennart-augustsson",
        "person+paul-hudak",
        "person+philip-wadler",
        "person+simon-peyton-jones",
      ],
      paradigms: ["para+functional"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );
}
