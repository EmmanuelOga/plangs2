import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+graalvm", {
      name: "GraalVM",
      description:
        "GraalVM is a high-performance runtime that provides significant performance enhancements for Java and other applications, enabling multiple languages to run together in a single virtual machine. With its polyglot capabilities, it supports Java, JavaScript, Python, Ruby, and LLVM-based projects, as well as web-based applications in WebAssembly.",
      shortDesc: "GraalVM is a high-performance runtime for multiple languages including Java, Python, and WebAssembly, with polyglot capabilities.",
      created: "2019",
      extGithubPath: "oracle/graal",
      extHomeURL: "https://www.graalvm.org/",
      extWikipediaPath: "GraalVM",
      githubStars: 20500,
      isTranspiler: false,
      keywords: ["graalvm", "high-performance", "interoperability", "java", "native-image", "oracle", "polyglot", "runtime", "vee"],
      releases: [{ version: "JDK23", date: "2024-09-17" }],
    })
    .relImplements.add("pl+ruby")
    .relInfluencedBy.add("pl+java", "pl+javascript")
    .relLicenses.add("lic+apache", "lic+dual", "lic+gnu-gpl")
    .relParadigms.add("para+compiled", "para+interpreted", "para+multi", "para+multi-dispatch")
    .relPlatforms.add("plat+apple", "plat+cross", "plat+java", "plat+linux", "plat+windows")
    .relTags.add("tag+app", "tag+compiler", "tag+framework", "tag+industrial", "tag+interpreters", "tag+scripting")
    .relTypeSystems.add("tsys+dynamic", "tsys+polymorphic", "tsys+static")
    .relWrittenWith.add("pl+c++", "pl+java");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
