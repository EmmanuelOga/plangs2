import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+standard-ml",
    "Standard ML",
    {
      name: "Standard ML",
      websites: [
        { kind: "wikipedia", title: "Standard ML", href: "https://en.wikipedia.org/wiki/Standard_ML" },
        { kind: "repository", title: "smlfamily.github.io", href: "https://smlfamily.github.io/" },
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
      },
      releases: [
        { version: "unknown", date: "1983-01-01", kind: "first" },
        { version: "unknown", date: "1997-01-01", kind: "stable" },
      ],
      extensions: [".sml"],
    },
    {
      dialects: ["pl+alice", "pl+ml", "pl+mlton", "pl+standard-ml-of-new-jersey"],
      implementations: ["pl+mlton", "pl+poly-slashml", "pl+standard-ml-of-new-jersey"],
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
        "pl+standard-ml-of-new-jersey",
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
      ],
      paradigms: ["para+functional", "para+imperative", "para+modular", "para+multi"],
      typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
    },
  );

  /**/
}
