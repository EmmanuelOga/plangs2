import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+hy", {
      name: "Hy",
      description:
        "Hy is a Lisp dialect embedded in Python, offering a multi-paradigm programming environment. Designed by Paul Tagliamonte and introduced at PyCon 2013, Hy acts as a transparent Lisp front-end for Python, translating s-expressions to Python's AST and incorporating Python libraries. This language allows the integration of imperative, functional, and object-oriented programming styles.",
      keywords: ["hy", "hylang", "lisp", "python"],
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
        { version: "1.0.0", name: "Hy 1.0", date: "2024-09-22" },
        { version: "1.0", name: "Hy 1.0", date: "2022-01-01" },
        { version: "0.29.0", name: "Hy 0.29.0", date: "2024-01-01" },
      ],
      stackovTags: ["hy"],
      githubName: "Hy",
      languishRanking: 201,
      githubLangId: "159",
      githubColor: "#7790B2",
      githubPopular: false,
      githubType: "programming",
    })
    .addCompilesTo(["pl+python"])
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
