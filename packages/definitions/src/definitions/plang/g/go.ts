import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+go", {
      name: "Go",
      description:
        "Statically typed, compiled high-level programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. It is syntactically similar to C, but offers memory safety, garbage collection, structural typing, and CSP-style concurrency. Sometimes referred to as Golang due to its former domain name golang.org, its proper name is Go. It is suitable for building scalable, simple, and secure systems.",
      shortDesc:
        "Statically typed, compiled language with memory safety and CSP-style concurrency, designed at Google.",
      created: "2009",
      extensions: [".go"],
      extGithubPath: "golang/go",
      extHomeURL: "https://go.dev/",
      extRedditPath: "golang",
      extWikipediaPath: "Go_(programming_language)",
      githubColor: "#00ADD8",
      githubLangId: "132",
      githubName: "Go",
      githubPopular: true,
      githubStars: 124500,
      githubType: "programming",
      isTranspiler: true,
      keywords: ["go", "golang"],
      languishRanking: 8,
      releases: [
        { version: "1.23.3", name: "", date: "2024-11-06" },
        { version: "1.23.0", name: "", date: "2024-01-01" },
      ],
      stackovTags: ["go"],
    })
    .relCompilesTo.add("pl+webassembly")
    .relInfluencedBy.add(
      "pl+apl",
      "pl+c",
      "pl+d",
      "pl+erlang",
      "pl+pascal",
      "pl+python",
    )
    .relLicenses.add("lic+bsd")
    .relParadigms.add(
      "para+concurrent",
      "para+functional",
      "para+general-purpose",
      "para+imperative",
      "para+multi",
      "para+oop",
    )
    .relPlatforms.add("plat+apple", "plat+bsd", "plat+linux", "plat+windows")
    .relTags.add(
      "tag+app",
      "tag+better-c",
      "tag+cli",
      "tag+compiler",
      "tag+dbms",
      "tag+industrial",
      "tag+interpreters",
      "tag+testing",
      "tag+viz",
    )
    .relTypeSystems.add(
      "tsys+inferred",
      "tsys+nominal",
      "tsys+static",
      "tsys+strong",
      "tsys+structural",
    )
    .relWrittenWith.add("pl+assembly", "pl+c++");
}
