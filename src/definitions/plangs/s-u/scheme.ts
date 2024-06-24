import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+scheme",
    "Scheme",
    {
      name: "Scheme",
      websites: [
        { kind: "wikipedia", title: "Scheme", href: "https://en.wikipedia.org/wiki/Scheme_(programming_language)" },
        { kind: "homepage", title: "www.scheme.org", href: "https://www.scheme.org/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/39/Lambda_lc.svg" }],
      releases: [
        { version: "unknown", date: "1975-01-01", kind: "first" },
        { version: "unknown", date: "2013-01-01", kind: "stable" },
      ],
      extensions: [".scm", ".ss"],
      references: {
        influenced: [
          { href: "https://doc.rust-lang.org/reference/influences.html", title: "Influences - The Rust Reference" },
        ],
      },
    },
    {
      dialects: ["pl+dsssl"],
      influenced: [
        "pl+ambienttalk",
        "pl+arc",
        "pl+clojure",
        "pl+common-lisp",
        "pl+dylan",
        "pl+ecmascript",
        "pl+eulisp",
        "pl+gambit",
        "pl+game-oriented-assembly-lisp",
        "pl+gnu-guile",
        "pl+haskell",
        "pl+hop",
        "pl+islisp",
        "pl+javascript",
        "pl+joy",
        "pl+julia",
        "pl+k",
        "pl+kawa",
        "pl+lfe",
        "pl+lua",
        "pl+multilisp",
        "pl+newlisp",
        "pl+oaklisp",
        "pl+pico",
        "pl+python",
        "pl+q",
        "pl+qalb",
        "pl+r",
        "pl+racket",
        "pl+ruby",
        "pl+rust",
        "pl+s",
        "pl+sather",
        "pl+scala",
        "pl+scm",
        "pl+siod",
        "pl+skill",
        "pl+snap-",
        "pl+source",
        "pl+t",
        "pl+tea",
      ],
      influences: ["pl+algol", "pl+lisp", "pl+mdl", "pl+racket"],
      paradigms: ["para+functional", "para+imperative", "para+meta", "para+multi"],
      people: [
        ["person+gerald-jay-sussman", "designer"],
        ["person+guy-l-steele", "designer"],
      ],
      typeSystems: ["tsys+dynamic", "tsys+latent", "tsys+strong"],
    },
  );

  /**/
}
