import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+graalvm", {
      name: "GraalVM",
      description:
        "GraalVM is a versatile virtual machine originating from the Java ecosystem that not only supports Java but also a range of other programming languages such as JavaScript, Ruby, Python, and R. GraalVM is designed to execute applications written in these languages as well as LLVM-based languages, providing high performance and interoperability across language boundaries. It can be used as a JIT compiler and is capable of ahead-of-time compilation for faster startup and reduced memory footprint.",
      keywords: ["graalvm", "virtual machine", "jdk", "interoperability"],
      websites: [
        { title: "www.graalvm.org", href: "https://www.graalvm.org/", kind: "homepage" },
        { title: "GraalVM", href: "https://en.wikipedia.org/wiki/GraalVM#Language_and_Runtime_Support", kind: "wikipedia" },
      ],
      year: 2019,
      isTranspiler: false,
      isMainstream: true,
      releases: [
        { version: "22.1", name: "GraalVM 22.1", date: "2022-05-12" },
        { version: "22.2", name: "GraalVM 22.2", date: "2022-08-23" },
        { version: "23.0", name: "GraalVM 23.0", date: "2023-06-20" },
      ],
    })
    .addImplements(["pl+ruby"])
    .addInfluencedBy(["pl+java"])
    .addLicenses(["license+apache", "license+gnu-gpl"])
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
