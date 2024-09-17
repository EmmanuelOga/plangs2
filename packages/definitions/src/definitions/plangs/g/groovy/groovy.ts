import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+groovy", {
      name: "Groovy",
      description:
        "Apache Groovy is a Java-syntax-compatible object-oriented programming language for the Java platform. It is both a static and dynamic language with features similar to those of Python, Ruby, and Smalltalk. It can be used as both a programming language and a scripting language for the Java Platform, is compiled to Java virtual machine (JVM) bytecode, and interoperates seamlessly with other Java code and libraries. Groovy uses a curly-bracket syntax similar to Java's. Groovy supports closures, multiline strings, and expressions embedded in strings. Much of Groovy's power lies in its AST transformations, triggered through annotations.",
      firstAppeared: "2003-01-01",
      extensions: [".groovy", ".gsh", ".gvy", ".gy"],
      websites: [
        { href: "https://groovy-lang.org/", title: "groovy-lang.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Groovy_(programming_language)", title: "Groovy", kind: "wikipedia" },
      ],
      releases: [
        { version: "4.0.22", date: "2024-01-01" },
        { version: "4.0.0", date: "2021-01-01" },
      ],
      images: [{ kind: "logo", title: "Groovy", url: "/images/plangs/g/groovy/logo.png" }],
    })
    .addInfluencedBy(["pl+perl", "pl+python", "pl+ruby"])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+aspect", "paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+oop", "paradigm+scripting"])
    .addPlatforms(["plat+java"])
    .addTags(["tag+app", "tag+compiler", "tag+framework", "tag+if", "tag+interpreter", "tag+scripting", "tag+testing"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic", "tsys+strong"]);
}
