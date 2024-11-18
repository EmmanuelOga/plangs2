import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+graalvm", {
      name: "GraalVM",
      description:
        "GraalVM is a versatile virtual machine originating from the Java ecosystem that supports multiple programming languages including Java, JavaScript, Python, Ruby, R, and webassembly. It is designed to execute applications written in these languages alongside LLVM-based languages and provides high performance and interoperability across language boundaries. Known for its ahead-of-time compilation and polyglot capabilities, GraalVM enhances performance, security, and startup time of Java and other applications.",
      keywords: ["graalvm", "interoperability", "java", "jdk", "native image", "polyglot"],
      year: 2019,
      releases: [
        { version: "19.0.0", name: "GraalVM 19.0", date: "2019-05-09" },
        { version: "23.0", name: "GraalVM 23", date: "2024-09-17" },
        { version: "22.1", name: "GraalVM 22.1", date: "2022-05-12" },
        { version: "22.2", name: "GraalVM 22.2", date: "2022-08-23" },
      ],
      extWikipediaPath: "GraalVM",
      extHomeURL: "https://www.graalvm.org/",
    })
    .addImplements(["pl+ruby"])
    .addInfluencedBy(["pl+java"])
    .addLicenses(["license+apache", "license+dual", "license+gnu-gpl"])
    .addParadigms(["paradigm+compiled", "paradigm+interpreted", "paradigm+multi", "paradigm+multi-dispatch"])
    .addPlatforms(["plat+apple", "plat+cross", "plat+java", "plat+linux", "plat+windows"])
    .addTags(["tag+app", "tag+compiler", "tag+framework", "tag+industrial", "tag+interpreter", "tag+scripting"])
    .addTypeSystems(["tsys+dynamic", "tsys+polymorphic", "tsys+static"])
    .addWrittenIn(["pl+c++", "pl+java"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
