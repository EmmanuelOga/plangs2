import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang.    .set("pl+fantom", {
      name: "Fantom",
      description:
        'Fantom is a general-purpose object-oriented programming language, created by Brian Frank and Andy Frank. It runs on the Java Runtime Environment (JRE), JavaScript, and the .NET Common Language Runtime (CLR) (.NET support is considered "prototype" status). Its stated goal is to provide a standard library API. Fantom uses a curly brace syntax, supports functional programming through closures and concurrency through the Actor model, and blends aspects of both static and dynamic typing.',
      keywords: [".net", "andy frank", "brian frank", "fantom", "javascript", "jvm", "language", "programming"],
      extensions: [".fan", ".fwt", ".pod"],
      isTranspiler: true,
      releases: [{ version: "1.0.79", name: "Fantom 1.0.79", date: "2023-07-17" }],
      stackovTags: ["fantom"],
      githubName: "Fantom",
      languishRanking: 425,
      githubLangId: "110",
      githubColor: "#14253c",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Fantom_(programming_language)",
      extRedditPath: "Fantom",
      extHomeURL: "http://www.fantom.org/",
      created: "2005",
    })
    .relCompilesTo.add(["pl+c-sharp", "pl+erlang", "pl+java", "pl+ruby", "pl+scala"])
    .relInfluencedBy.add(["pl+c-sharp", "pl+erlang", "pl+ruby", "pl+scala"])
    .relLicense.add(["license+afl", "license+mit"])
    .relParadigm.add(["para+concurrent", "para+functional", "para+multi", "para+oop"])
    .relPlatforms.add(["plat+.net", "plat+cross", "plat+java"])
    .relTags.add(["tag+app", "tag+interpreters", "tag+scripting"])
    .relTsys.add(["tsys+dynamic", "tsys+static", "tsys+strong"])
    .relWrittenIn.add(["pl+java"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
