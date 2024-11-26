import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+xtend", {
      name: "Xtend",
      description:
        "Xtend is a general-purpose high-level programming language designed for the Java Virtual Machine (JVM), focusing on a more concise syntax compared to Java. It offers additional functionality such as type inference, extension methods, and operator overloading. Xtend integrates seamlessly with existing Java libraries and supports features known from functional programming like lambda expressions. Developed by typefox and first released in 2011, Xtend compiles to Java code and ensures compatibility with Java's type system, making it accessible for Java developers. It is open source under the Eclipse Public License.",
      keywords: ["eclipse", "java", "jvm", "programming language", "xtend"],
      extensions: [".xtend"],
      isTranspiler: true,
      releases: [{ version: "2.25.0", name: "Xtend 2.25.0", date: "2021-03-02" }],
      stackovTags: ["xtend"],
      githubName: "Xtend",
      languishRanking: 269,
      githubLangId: "406",
      githubColor: "#24255d",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Xtend",
      extHomeURL: "https://eclipse.dev/Xtext/xtend/",
      created: "2011",
    })
    .relCompilesTo.add(["pl+java"])
    .relInfluence.add(["pl+groovy", "pl+java", "pl+scala"])
    .relLicense.add(["lic+epl"])
    .relParadigm.add(["para+functional", "para+imperative", "para+oop"])
    .relPlatform.add(["plat+cross", "plat+java"])
    .relTag.add(["tag+compiler", "tag+editor", "tag+interpreters"])
    .relTypeSystem.add(["tsys+inferred", "tsys+static", "tsys+strong"])
    .relWrittenInPlang.add(["pl+java"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
