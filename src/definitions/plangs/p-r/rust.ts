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
        { version: "unknown", kind: "stable" },
        { version: "1.78.0", date: "2024-01-01", kind: "stable" },
      ],
      extensions: [".rs", ".rlib"],
    },
    {
      dialects: ["pl+project-verona"],
      influences: [
        "pl+sml",
        "pl+scheme",
        "pl+cpp",
        "pl+erlang",
        "pl+alef",
        "pl+ruby",
        "pl+ocaml",
        "pl+ml",
        "pl+modula",
        "pl+newsqueak",
        "pl+cyclone",
        "pl+c-sharp",
        "pl+elm",
        "pl+haskell",
        "pl+limbo",
        "pl+swift",
        "pl+c",
        "pl+racket",
        "pl+cilk-plus",
      ],
      licenses: ["lic+mit", "lic+apache"],
      paradigms: ["para+concurrent", "para+functional", "para+generic", "para+imperative", "para+structured"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+affine", "tsys+inferred", "tsys+nominative", "tsys+static", "tsys+strong"],
    },
  );
}
