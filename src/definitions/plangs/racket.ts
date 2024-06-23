import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+racket",
    "Racket",
    {
      name: "Racket",
      websites: [
        { kind: "wikipedia", title: "Racket", href: "https://en.wikipedia.org/wiki/Racket_(programming_language)" },
        { kind: "homepage", title: "racket-lang.org", href: "https://racket-lang.org/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Racket-logo.svg" }],
      releases: [
        { version: "unknown", date: "1995-01-28", kind: "first" },
        { version: "8.13", date: "2024-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [{ href: "https://github.com/racket/racket/releases/tag/v8.13", title: "Racket 8.13" }],
        license: [
          {
            href: "https://blog.racket-lang.org/2019/11/completing-racket-s-relicensing-effort.html",
            title: "Completing Racket's relicensing effort",
          },
        ],
        filename_extensions: [
          { href: "https://docs.racket-lang.org/drracket/drracket-files.html", title: "DrRacket Files" },
        ],
        influenced_by: [
          {
            href: "http://www.ccs.neu.edu/racket/pubs/dls10-sf.pdf",
            title: "DLS 2010: Contracts for First-Class Classes",
          },
        ],
        influenced: [
          { href: "https://mail.mozilla.org/pipermail/rust-dev/2013-May/003947.html", title: "Planet2 questions" },
          {
            href: "https://github.com/rust-lang/rust/blob/0486e12ad0661adcfdbd926dea17d7edfda419c1/src/doc/book/bibliography.md",
            title: "Rust Bibliography",
          },
          { href: "http://www.r6rs.org", title: "Revised6 Report on the Algorithmic Language Scheme (R6RS)" },
        ],
      },
      extensions: [".rkt"],
    },
    {
      dialects: ["pl+lisp"],
      influenced: ["pl+clojure", "pl+eiffel", "pl+scheme"],
      influences: ["pl+clojure", "pl+eiffel", "pl+rust", "pl+scheme"],
      licenses: ["lic+apache", "lic+mit"],
      paradigms: [
        "para+functional",
        "para+imperative",
        "para+logic",
        "para+meta",
        "para+modular",
        "para+multi",
        "para+objects",
        "para+reflective",
      ],
      platforms: ["platf+arm", "platf+cross-platform", "platf+mips", "platf+x86"],
      typeSystems: ["tsys+dynamic", "tsys+static", "tsys+strong"],
    },
  );

  /**/
}
