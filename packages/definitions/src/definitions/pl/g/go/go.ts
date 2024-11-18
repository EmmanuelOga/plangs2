import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+go", {
      name: "Go",
      description:
        "Go is a statically typed, compiled high-level programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. It is syntactically similar to C, but offers memory safety, garbage collection, structural typing, and CSP-style concurrency. Sometimes referred to as Golang due to its former domain name golang.org, its proper name is Go. It is suitable for building scalable, simple, and secure systems.",
      keywords: ["go", "golang"],
      extensions: [".go"],
      year: 2009,
      releases: [
        { version: "1.23.3", name: "", date: "2024-11-06" },
        { version: "1.23.0", name: "", date: "2024-01-01" },
      ],
      stackovTags: ["go"],
      githubName: "Go",
      languishRanking: 8,
      githubLangId: "132",
      githubColor: "#00ADD8",
      githubPopular: true,
      githubType: "programming",
      extWikipediaPath: "Go_(programming_language)",
      extRedditPath: "golang",
      extHomeURL: "https://go.dev/",
    })
    .addInfluencedBy(["pl+apl", "pl+c", "pl+d", "pl+erlang", "pl+pascal", "pl+python"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+concurrent", "paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+oop"])
    .addPlatforms(["plat+apple", "plat+bsd", "plat+linux", "plat+windows"])
    .addTags(["tag+app", "tag+cli", "tag+compiler", "tag+dbms", "tag+industrial", "tag+interpreter", "tag+testing", "tag+viz"])
    .addTypeSystems(["tsys+inferred", "tsys+nominal", "tsys+static", "tsys+strong", "tsys+structural"])
    .addWrittenIn(["pl+assembly", "pl+c++"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
