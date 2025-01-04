import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+jruby", {
      name: "JRuby",
      description:
        "Implementation of the Ruby programming language atop the Java Virtual Machine, written largely in Java. It is free software released under a three-way EPL/GPL/LGPL license. JRuby is tightly integrated with Java to allow the embedding of the interpreter into any Java application with full two-way access between Java and Ruby code, similar to Jython for Python.",
      shortDesc:
        "Java-based implementation of Ruby, integrating closely with Java for two-way access.",
      created: "2001",
      extensions: [".jruby", ".rb"],
      extGithubPath: "jruby/jruby",
      extHomeURL: "https://www.jruby.org/",
      extRedditPath: "ruby",
      extWikipediaPath: "Ruby_(programming_language)",
      githubColor: "#701516",
      githubLangId: "326",
      githubName: "Ruby",
      githubPopular: true,
      githubStars: 3800,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["interpreter", "java", "jruby", "jvm", "ruby"],
      releases: [{ version: "9.4.9.0", date: "2024-09-04" }],
      stackovTags: ["ruby"],
    })
    .relImplements.add("pl+ruby")
    .relInfluencedBy.add("pl+ruby")
    .relLicenses.add("lic+epl", "lic+gnu-gpl", "lic+lgpl")
    .relParadigms.add(
      "para+concurrent",
      "para+oop",
      "para+reflective",
      "para+scripting",
    )
    .relPlatforms.add("plat+cross", "plat+java")
    .relTags.add(
      "tag+compiler",
      "tag+framework",
      "tag+interpreters",
      "tag+scripting",
      "tag+shell",
    )
    .relTypeSystems.add(
      "tsys+duck",
      "tsys+dynamic",
      "tsys+object",
      "tsys+strong",
    )
    .relWrittenWith.add("pl+java");
}
