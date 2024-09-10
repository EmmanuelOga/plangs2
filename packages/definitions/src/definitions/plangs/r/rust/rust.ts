import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+rust", {
      name: "Rust",
      description:
        'Rust is a general-purpose programming language emphasizing performance, type safety, and concurrency. It enforces memory safety, meaning that all references point to valid memory, without a garbage collector. To simultaneously enforce memory safety and prevent data races, its "borrow checker" tracks the object lifetime of all references in a program during compiling.',
      firstAppeared: "2015-01-01",
      extensions: [".rlib", ".rs"],
      websites: [
        { href: "https://www.rust-lang.org/", title: "www.rust-lang.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Rust_(programming_language)", title: "Rust", kind: "wikipedia" },
      ],
      releases: [{ version: "1.80.1", date: "2024-01-01" }],
      images: [{ kind: "logo", title: "Rust", url: "/images/plangs/r/rust/logo.png" }],
    })
    .addInfluencedBy([
      "pl+c",
      "pl+c++",
      "pl+c-sharp",
      "pl+cilk",
      "pl+erlang",
      "pl+haskell",
      "pl+ml",
      "pl+mzscheme",
      "pl+ocaml",
      "pl+r5rs",
      "pl+racket",
      "pl+ruby",
      "pl+scheme",
      "pl+standard-ml",
      "pl+swift",
    ])
    .addLicenses(["license+apache", "license+mit"])
    .addParadigms(["paradigm+concurrent", "paradigm+functional", "paradigm+imperative", "paradigm+structured"])
    .addPlatforms(["plat+cross"])
    .addTypeSystems(["tsys+affine", "tsys+inferred", "tsys+nominal", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+ocaml"]);
}
