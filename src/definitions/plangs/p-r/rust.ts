import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+rust",
    "Rust",
    {
      name: "Rust",
      websites: [
        { kind: "wikipedia", title: "Rust", href: "https://en.wikipedia.org/wiki/Rust_(programming_language)" },
        { kind: "homepage", title: "foundation.rust-lang.org", href: "https://foundation.rust-lang.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg",
        },
      ],
      releases: [
        { version: "unknown", date: "2015-05-15", kind: "first" },
        { version: "1.78.0", date: "2024-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [
          { href: "https://blog.rust-lang.org/2024/05/02/Rust-1.78.0.html", title: "Announcing Rust 1.78.0" },
        ],
        influenced_by: [
          {
            href: "https://web.archive.org/web/20231126231034/https://doc.rust-lang.org/reference/influences.html",
            title: "Influences - The Rust Reference",
          },
          { href: "https://blog.rust-lang.org/2016/08/10/Shape-of-errors-to-come.html", title: "Uniqueness Types" },
        ],
        influenced: [
          { href: "http://docs.idris-lang.org/en/latest/reference/uniqueness-types.html", title: "Uniqueness Types" },
          {
            href: "https://web.archive.org/web/20200117143852/https://www.zdnet.com/article/microsoft-opens-up-rust-inspired-project-verona-programming-language-on-github/",
            title: "Microsoft opens up Rust-inspired Project Verona programming language on GitHub",
          },
          { href: "https://arxiv.org/abs/1710.07047", title: "1710.07047" },
          {
            href: "https://web.archive.org/web/20181225175312/http://nondot.org/sabre/",
            title: "Chris Lattner's Homepage",
          },
          {
            href: "https://github.com/vlang/v/blob/master/doc/docs.md#introduction",
            title: "V documentation (Introduction)",
          },
          {
            href: "https://www.infoworld.com/article/3113083/new-challenger-joins-rust-to-upend-c-language.html",
            title: "New challenger joins Rust to topple C language",
          },
        ],
      },
      extensions: [".rs", ".rlib"],
    },
    {
      dialects: ["pl+project-verona"],
      influences: [
        "pl+alef",
        "pl+c",
        "pl+c-sharp",
        "pl+cilk-plus",
        "pl+cpp",
        "pl+cyclone",
        "pl+elm",
        "pl+erlang",
        "pl+haskell",
        "pl+limbo",
        "pl+ml",
        "pl+modula-3",
        "pl+newsqueak",
        "pl+ocaml",
        "pl+racket",
        "pl+ruby",
        "pl+scheme",
        "pl+sml",
        "pl+swift",
      ],
      licenses: ["lic+apache", "lic+mit"],
      paradigms: ["para+concurrent", "para+functional", "para+generic", "para+imperative", "para+structured"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+affine", "tsys+inferred", "tsys+nominative", "tsys+static", "tsys+strong"],
    },
  );

  /**/
}
