import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+hy", {
      images: [{ kind: "other", title: "Hy", url: "/images/plangs/h/hy/other.png" }],
      name: "Hy",
      description:
        "Hy is a dialect of the Lisp programming language designed to interact with Python by translating s-expressions into Python's abstract syntax tree (AST). Hy was introduced at Python Conference (PyCon) 2013 by Paul Tagliamonte. Lisp allows operating on code as data (metaprogramming), thus Hy can be used to write domain-specific languages.",
      websites: [
        { href: "http://hylang.org/", title: "hylang.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Hy_(programming_language)", title: "Hy", kind: "wikipedia" },
      ],
      extensions: [".hy"],
      releases: [
        { version: "0.29.0", date: "2024-01-01" },
        { version: "1.0", date: "2022-01-01" },
      ],
    })
    .addDialectOf(["pl+lisp"])
    .addInfluencedBy(["pl+clojure", "pl+common-lisp"])
    .addLicenses(["lic+mit"])
    .addParadigms(["para+functional", "para+metaprogramming", "para+multi", "para+oop", "para+procedural", "para+reflective"])
    .addPlatforms(["platf+cross", "platf+x86-64"]);
}
