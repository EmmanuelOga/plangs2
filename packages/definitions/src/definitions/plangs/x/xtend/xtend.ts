import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+xtend", {
      name: "Xtend",
      description:
        "Xtend is a general-purpose high-level programming language designed for the Java Virtual Machine (JVM), focusing on a more concise syntax compared to Java. It offers additional functionality such as type inference, extension methods, and operator overloading. Xtend integrates seamlessly with existing Java libraries and supports features known from functional programming like lambda expressions. Developed by typefox and first released in 2011, Xtend compiles to Java code and ensures compatibility with Java's type system, making it accessible for Java developers. It is open source under the Eclipse Public License.",
      keywords: ["eclipse", "java", "jvm", "programming language", "xtend"],
      websites: [
        { title: "Xtend - Modernized Java", href: "https://eclipse.dev/Xtext/xtend/", kind: "homepage" },
        { title: "Xtend - Wikipedia", href: "https://en.wikipedia.org/wiki/Xtend", kind: "wikipedia" },
      ],
      extensions: [".xtend"],
      year: 2011,
      isTranspiler: true,
      isMainstream: false,
      releases: [{ version: "2.25.0", name: "Xtend 2.25.0", date: "2021-03-02" }],
      stackovTags: ["xtend"],
      githubName: "Xtend",
      languishRanking: 269,
      githubLangId: "406",
      githubColor: "#24255d",
      githubPopular: false,
      githubType: "programming",
    })
    .addCompilesTo(["pl+java"])
    .addInfluencedBy(["pl+groovy", "pl+java", "pl+scala"])
    .addLicenses(["license+epl"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+oop"])
    .addPlatforms(["plat+cross", "plat+java"])
    .addTags(["tag+compiler", "tag+editor", "tag+interpreter"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+java"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
