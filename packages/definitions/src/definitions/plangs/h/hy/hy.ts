import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+hy", {
      name: "Hy",
      description:
        "Hy is a dialect of the Lisp programming language designed to interact with Python by translating s-expressions into Python's abstract syntax tree (AST). Hy was introduced at Python Conference (PyCon) 2013 by Paul Tagliamonte. Lisp allows operating on code as data (metaprogramming), thus Hy can be used to write domain-specific languages.",
      keywords: ["hy"],
      websites: [
        { title: "hylang.org", href: "http://hylang.org/", kind: "homepage" },
        { title: "Hy", href: "https://en.wikipedia.org/wiki/Hy_(programming_language)", kind: "wikipedia" },
        { title: "Hy on Reddit", kind: "reddit", href: "https://reddit.com/r/hylang" },
        { title: "Hy on Wikipedia", kind: "wikipedia", href: "https://en.wikipedia.org/wiki/Hy" },
      ],
      extensions: [".hy"],
      year: 2013,
      isTranspiler: true,
      isMainstream: false,
      releases: [
        { version: "1.0", name: "Hy 1.0", date: "2022-01-01" },
        { version: "0.29.0", name: "Hy 0.29.0", date: "2024-01-01" },
      ],
      github: { name: "Hy", langId: "159", color: "#7790B2", popular: false, type: "programming" },
      stackovTags: ["hy"],
    })
    .addDialectOf(["pl+lisp"])
    .addInfluencedBy(["pl+clojure", "pl+common-lisp", "pl+python"])
    .addLicenses(["license+mit"])
    .addParadigms([
      "paradigm+functional",
      "paradigm+metaprogramming",
      "paradigm+multi",
      "paradigm+oop",
      "paradigm+procedural",
      "paradigm+reflective",
      "paradigm+scripting",
    ])
    .addPlatforms(["plat+cross", "plat+x86-64"])
    .addTags(["tag+interpreter", "tag+scripting"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic"])
    .addWrittenIn(["pl+python"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
