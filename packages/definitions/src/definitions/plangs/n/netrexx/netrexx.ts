import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+netrexx", {
      name: "NetRexx",
      description:
        "NetRexx is an open source, originally IBM's, variant of the REXX programming language to run on the Java virtual machine. It supports a classic REXX syntax, with no reserved keywords, along with considerable additions to support object-oriented programming in a manner compatible with Java's object model, yet can be used as both a compiled and an interpreted language, with an option of using only data types native to the JVM or the NetRexx runtime package. The latter offers the standard Rexx data type that combines string processing with unlimited precision decimal arithmetic.",
      keywords: ["netrexx"],
      websites: [
        { title: "www.netrexx.org", href: "https://www.netrexx.org/", kind: "homepage" },
        { title: "NetRexx", href: "https://en.wikipedia.org/wiki/NetRexx", kind: "wikipedia" },
      ],
      extensions: [".nrx"],
      year: 1996,
      isTranspiler: true,
      isMainstream: false,
      releases: [{ version: "4.06", name: "NetRexx 4.06 Release", date: "2024-01-01" }],
    })
    .addInfluencedBy(["pl+rexx"])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+multi", "paradigm+oop", "paradigm+procedural", "paradigm+structured"])
    .addPlatforms(["plat+android", "plat+apple", "plat+cross", "plat+java", "plat+linux", "plat+windows"])
    .addTags(["tag+interpreter", "tag+scripting"])
    .addTypeSystems(["tsys+safe", "tsys+static", "tsys+string", "tsys+strong"])
    .addWrittenIn(["pl+java"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
