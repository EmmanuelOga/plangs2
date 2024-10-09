import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+groovy", {
      name: "Groovy",
      description:
        "Apache Groovy is a Java-syntax-compatible object-oriented programming language for the Java platform. It is both a static and dynamic language with features similar to those of Python, Ruby, and Smalltalk. It can be used as both a programming language and a scripting language for the Java Platform, is compiled to Java virtual machine (JVM) bytecode, and interoperates seamlessly with other Java code and libraries. Groovy uses a curly-bracket syntax similar to Java's, supports closures, multiline strings, and expressions embedded in strings. Much of Groovy's power lies in its AST transformations, triggered through annotations.",
      keywords: ["groovy"],
      websites: [
        { title: "groovy-lang.org", href: "https://groovy-lang.org/", kind: "homepage" },
        { title: "Groovy", href: "https://en.wikipedia.org/wiki/Groovy_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".groovy", ".gsh", ".gvy", ".gy"],
      firstAppeared: "2003-01-01",
      isTranspiler: false,
      isMainstream: true,
      releases: [
        { version: "4.0.22", name: "Groovy 4.0.22", date: "2024-01-01" },
        { version: "4.0.0", name: "Groovy 4.0.0", date: "2021-01-01" },
      ],
    })
    .addInfluencedBy(["pl+perl", "pl+python", "pl+ruby"])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+aspect", "paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+oop", "paradigm+scripting"])
    .addPlatforms(["plat+java"])
    .addTags(["tag+compiler", "tag+framework", "tag+interpreter", "tag+scripting", "tag+testing"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic", "tsys+strong"]);
}
