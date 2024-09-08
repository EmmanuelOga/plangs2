import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+go", {
      images: [{ kind: "logo", title: "Go" }],
      name: "Go",
      description:
        "Go is a statically typed, compiled high-level programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. It is syntactically similar to C, but also has memory safety, garbage collection, structural typing, and CSP-style concurrency. It is often referred to as Golang because of its former domain name, golang.org, but its proper name is Go.",
      websites: [
        { href: "https://go.dev/", title: "go.dev", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Go_(programming_language)", title: "Go", kind: "wikipedia" },
      ],
      extensions: [".go"],
      releases: [{ version: "1.23.0", date: "2024-01-01" }],
    })
    .addInfluencedBy(["pl+apl", "pl+c", "pl+d", "pl+erlang", "pl+modula", "pl+oberon", "pl+pascal"])
    .addLicenses(["lic+bsd"])
    .addParadigms(["para+concurrent", "para+functional", "para+imperative", "para+multi", "para+oop"])
    .addPlatforms(["platf+apple", "platf+bsd", "platf+linux", "platf+windows"])
    .addTypeSystems(["tsys+inferred", "tsys+nominal", "tsys+static", "tsys+strong", "tsys+structural"])
    .addWrittenIn(["pl+assembly", "pl+c++"]);
}