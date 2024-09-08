import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+netrexx", {
      images: [],
      name: "NetRexx",
      description:
        "NetRexx is an open source, originally IBM's, variant of the REXX programming language to run on the Java virtual machine.  It supports a classic REXX syntax, with no reserved keywords, along with considerable additions to support object-oriented programming in a manner compatible with Java's object model, yet can be used as both a compiled and an interpreted language, with an option of using only data types native to the JVM or the NetRexx runtime package. The latter offers the standard Rexx data type that combines string processing with unlimited precision decimal arithmetic.",
      websites: [
        { href: "https://www.netrexx.org/", title: "www.netrexx.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/NetRexx", title: "NetRexx", kind: "wikipedia" },
      ],
      extensions: [".nrx"],
      releases: [{ version: "4.06", date: "2024-01-01" }],
    })
    .addParadigms(["para+multi", "para+oop", "para+procedural", "para+structured"])
    .addPlatforms(["platf+android", "platf+apple", "platf+cross", "platf+linux", "platf+windows"])
    .addTypeSystems(["tsys+safe", "tsys+static", "tsys+string", "tsys+strong"]);
}