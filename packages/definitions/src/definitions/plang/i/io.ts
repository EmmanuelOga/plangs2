import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+io", {
      name: "Io",
      description:
        "A pure object-oriented programming language inspired by Smalltalk, Self, Lua, Lisp, Act1, and NewtonScript. Io has a prototype-based object model similar to those in Self and NewtonScript, eliminating the distinction between instance and class. Like Smalltalk, everything is an object and it uses dynamic typing. Like Lisp, programs are just data trees. Io uses actors for concurrency. It emphasizes simplicity and flexibility with features such as coroutines, actor-based concurrency, and incremental garbage collection.",
      shortDesc:
        "A pure object-oriented language with a prototype-based model, inspired by Smalltalk, Self, and others, emphasizing simplicity, flexibility, and concurrency.",
      created: "2002",
      extensions: [".io"],
      extGithubPath: "IoLanguage/io",
      extHomeURL: "https://iolanguage.org/",
      extRedditPath: "iolanguage",
      extWikipediaPath: "Io_(programming_language)",
      githubColor: "#a9188d",
      githubLangId: "168",
      githubName: "Io",
      githubPopular: false,
      githubStars: 2700,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["io"],
      languishRanking: 285,
      releases: [
        {
          version: "2019.05.22-alpha",
          name: "Preview release",
          date: "2019-05-21",
        },
      ],
      stackovTags: ["iolanguage"],
    })
    .relInfluencedBy.add("pl+lisp", "pl+lua", "pl+self")
    .relLicenses.add("lic+bsd")
    .relParadigms.add(
      "para+concurrent",
      "para+general-purpose",
      "para+oop",
      "para+prototype",
      "para+scripting",
    )
    .relPlatforms.add("plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+interpreters", "tag+scripting")
    .relTypeSystems.add("tsys+dynamic", "tsys+strong")
    .relWrittenWith.add("pl+c", "pl+python");
}
