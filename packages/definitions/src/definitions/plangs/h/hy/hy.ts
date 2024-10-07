import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+hy", {
      name: "Hy",
      description:
        "Hy is a dialect of the Lisp programming language designed to interact with Python by translating s-expressions into Python's abstract syntax tree (AST). Hy was introduced at Python Conference (PyCon) 2013 by Paul Tagliamonte. Lisp allows operating on code as data (metaprogramming), thus Hy can be used to write domain-specific languages.",
      firstAppeared: "2013-01-01",
      extensions: [".hy"],
      websites: [
        { href: "http://hylang.org/", title: "hylang.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Hy_(programming_language)", title: "Hy", kind: "wikipedia" },
      ],
      releases: [
        { version: "0.29.0", date: "2024-01-01" },
        { version: "1.0", date: "2022-01-01" },
      ],
    })
    .addDialectOf(["pl+lisp"])
    .addInfluencedBy(["pl+clojure", "pl+common-lisp"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+functional", "paradigm+metaprogramming", "paradigm+multi", "paradigm+oop", "paradigm+procedural", "paradigm+reflective"])
    .addPlatforms(["plat+cross", "plat+x86-64"])
    .addTags(["tag+interpreter"]);
}
