import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+sml",
    "Standard ML",
    {
      name: "Standard ML",
      websites: [
        { kind: "wikipedia", title: "Standard ML", href: "https://en.wikipedia.org/wiki/Standard_ML" },
        { kind: "repository", title: "smlfamily.github.io", href: "https://smlfamily.github.io/" },
        { kind: "wikipedia", title: "SML/NJ", href: "https://en.wikipedia.org/wiki/Standard_ML_of_New_Jersey" },
        { kind: "homepage", title: "www.smlnj.org", href: "http://www.smlnj.org" },
      ],
      references: {
        paradigm: [
          {
            href: "https://www.cs.cmu.edu/~rwh/introsml/modules/subfun.htm",
            title: "Programming in Standard ML: Hierarchies and Parameterization",
          },
        ],
        first_appeared: [{ href: "http://www.smlnj.org/sml97.html", title: "SML '97" }],
        stable_release: [{ href: "http://www.smlnj.org/sml97.html", title: "SML '97" }],
        influenced: [
          {
            href: "https://docs.python.org/3/library/itertools.html",
            title: "itertools — Functions creating iterators for efficient looping — Python 3.7.1rc1 documentation",
          },
          { href: "https://doc.rust-lang.org/reference/influences.html", title: "Influences - The Rust Reference" },
        ],
        developers: [{ href: "https://www.smlnj.org/smlnj.html", title: "SML/NJ background information" }],
        license: [{ href: "http://www.smlnj.org/license.html", title: "Standard ML of New Jersey License" }],
      },
      releases: [
        { version: "unknown", date: "1983-01-01", kind: "first" },
        { version: "unknown", date: "1997-01-01", kind: "stable" },
        { version: "unknown", date: "1988-01-01", kind: "first" },
        { version: "110.99.4", date: "2023-01-01", kind: "stable" },
      ],
      extensions: [".sml", ".sml"],
    },
    {
      dialects: ["pl+alice", "pl+ml", "pl+mlton", "pl+sml"],
      implementations: ["pl+c", "pl+mlton", "pl+poly-slashml", "pl+sml"],
      influenced: [
        "pl+elm",
        "pl+eulisp",
        "pl+f-star",
        "pl+futhark",
        "pl+haskell",
        "pl+ml",
        "pl+mlton",
        "pl+ocaml",
        "pl+pascal",
        "pl+python",
        "pl+rust",
        "pl+scala",
        "pl+sml",
      ],
      influences: [
        "pl+elm",
        "pl+f-sharp",
        "pl+f-star",
        "pl+haskell",
        "pl+hope",
        "pl+ml",
        "pl+ocaml",
        "pl+pascal",
        "pl+python",
        "pl+rust",
        "pl+scala",
        "pl+sml",
      ],
      licenses: ["lic+permissive"],
      paradigms: ["para+functional", "para+imperative", "para+modular", "para+multi"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );

  /**/
}
