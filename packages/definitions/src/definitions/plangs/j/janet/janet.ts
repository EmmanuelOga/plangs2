import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+janet", {
      name: "Janet",
      description:
        "Janet is a dynamic and functional programming language, ideal for system scripting and embedding in C/C++ programs. With built-in libraries for networking, threading, and more, Janet offers a powerful set of features with a minimalist setup, making it portable and easy to embed.",
      keywords: ["dynamic", "embedded", "functional", "janet"],
      websites: [
        { title: "Janet Programming Language", href: "https://janet-lang.org/", kind: "homepage" },
        { title: "janet-lang/janet: A dynamic language and bytecode vm", href: "https://github.com/janet-lang/janet", kind: "repository" },
        { href: "https://www.reddit.com/r/janetlang/", title: "Janet on Reddit", kind: "reddit" },
      ],
      extensions: [".janet"],
      year: 2017,
      releases: [{ version: "1.17.0", name: "Janet 1.17.0", date: "2023-06-15" }],
      githubName: "Janet",
      languishRanking: 313,
      githubLangId: "1028705371",
      githubColor: "#0886a5",
      githubPopular: false,
      githubType: "programming",
      isMainstream: false,
    })
    .addInfluencedBy(["pl+lisps", "pl+scheme"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+extensible", "paradigm+functional", "paradigm+imperative", "paradigm+scripting"])
    .addPlatforms(["plat+apple", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+cli", "tag+embedded", "tag+scripting"])
    .addTypeSystems(["tsys+dynamic"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
