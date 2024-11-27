import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+io", {
      name: "Io",
      description:
        "Io is a pure object-oriented programming language inspired by Smalltalk, Self, Lua, Lisp, Act1, and NewtonScript. Io has a prototype-based object model similar to those in Self and NewtonScript, eliminating the distinction between instance and class. Like Smalltalk, everything is an object and it uses dynamic typing. Like Lisp, programs are just data trees. Io uses actors for concurrency. It emphasizes simplicity and flexibility with features such as coroutines, actor-based concurrency, and incremental garbage collection.",
      keywords: ["io"],
      extensions: [".io"],
      releases: [
        { version: "20170906", name: "Stable release", date: "2017-09-06" },
        { version: "2019.05.22-alpha", name: "Preview release", date: "2019-05-22" },
        { version: "2019.05.22", name: "Io 2019.05.22", date: "2019-05-22" },
      ],
      stackovTags: ["iolanguage"],
      githubName: "Io",
      languishRanking: 285,
      githubLangId: "168",
      githubColor: "#a9188d",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Io_(programming_language)",
      extRedditPath: "iolanguage",
      extHomeURL: "https://iolanguage.org/",
      created: "2002",
    })
    .relInfluencedBy.add(["pl+lisp", "pl+lua", "pl+self"])
    .relLicense.add(["lic+bsd"])
    .relParadigm.add(["para+concurrent", "para+oop", "para+prototype", "para+scripting"])
    .relPlatform.add(["plat+cross", "plat+linux", "plat+windows"])
    .relTag.add(["tag+interpreters", "tag+scripting"])
    .relTypeSystem.add(["tsys+dynamic", "tsys+strong"])
    .relWrittenInPlang.add(["pl+c", "pl+python"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
