import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+go", {
      name: "Go",
      description:
        "Go is a statically typed, compiled high-level programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. It is syntactically similar to C, but also has memory safety, garbage collection, structural typing, and CSP-style concurrency. It is often referred to as Golang because of its former domain name, golang.org, but its proper name is Go.",
      keywords: ["go", "golang"],
      websites: [
        { title: "go.dev", href: "https://go.dev/", kind: "homepage" },
        { title: "Go", href: "https://en.wikipedia.org/wiki/Go_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".go"],
      year: 2009,
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "1.23.0", name: "", date: "2024-01-01" }],
    })
    .addInfluencedBy(["pl+apl", "pl+c", "pl+d", "pl+erlang", "pl+modula", "pl+oberon", "pl+pascal", "pl+python"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+concurrent", "paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+oop"])
    .addPlatforms(["plat+apple", "plat+bsd", "plat+linux", "plat+windows"])
    .addTags(["tag+app", "tag+compiler", "tag+dbms", "tag+industrial", "tag+interpreter", "tag+testing", "tag+viz"])
    .addTypeSystems(["tsys+inferred", "tsys+nominal", "tsys+static", "tsys+strong", "tsys+structural"])
    .addWrittenIn(["pl+assembly", "pl+c++"]);
}
