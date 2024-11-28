import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+go", {
      name: "Go",
      description:
        "Go is a statically typed, compiled high-level programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. It is syntactically similar to C, but offers memory safety, garbage collection, structural typing, and CSP-style concurrency. Sometimes referred to as Golang due to its former domain name golang.org, its proper name is Go. It is suitable for building scalable, simple, and secure systems.",
      keywords: ["go", "golang"],
      extensions: [".go"],
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
      created: "2009",
    })
    .relInfluencedBy.add(["pl+apl", "pl+c", "pl+d", "pl+erlang", "pl+pascal", "pl+python"])
    .relLicenses.add(["lic+bsd"])
    .relParadigms.add(["para+concurrent", "para+functional", "para+imperative", "para+multi", "para+oop"])
    .relPlatforms.add(["plat+apple", "plat+bsd", "plat+linux", "plat+windows"])
    .relTags.add(["tag+app", "tag+cli", "tag+compiler", "tag+dbms", "tag+industrial", "tag+interpreters", "tag+testing", "tag+viz"])
    .relTypeSystems.add(["tsys+inferred", "tsys+nominal", "tsys+static", "tsys+strong", "tsys+structural"])
    .relWrittenWith.add(["pl+assembly", "pl+c++"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
