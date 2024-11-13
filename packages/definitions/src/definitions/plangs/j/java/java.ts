import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+java", {
      name: "Java",
      description:
        'Java is a high-level programming language developed by Sun Microsystems, now owned by Oracle. It is designed to have as few implementation dependencies as possible, making it a versatile and widely-used language. Java is known for its portability across platforms, "write once, run anywhere" capability, strong memory management, and vast ecosystem.',
      keywords: ["java"],
      websites: [
        { title: "Java", href: "https://www.java.com/en/", kind: "homepage" },
        { title: "Java (programming language) - Wikipedia", href: "https://en.wikipedia.org/wiki/Java_(programming_language)", kind: "wikipedia" },
        { title: "OpenJDK", href: "https://openjdk.java.net/", kind: "repository" },
        { title: "Java on Reddit", href: "https://reddit.com/r/java", kind: "reddit" },
      ],
      extensions: [".class", ".jar", ".java", ".jmod", ".war"],
      year: 1995,
      isMainstream: true,
      releases: [
        { version: "JDK 1.0", name: "Java SE 1.0", date: "1996-01-23" },
        { version: "Java SE 8", name: "Java SE 8", date: "2014-03-18" },
        { version: "Java SE 11", name: "Java SE 11", date: "2018-09-25" },
        { version: "Java SE 17", name: "Java SE 17", date: "2021-09-14" },
        { version: "Java SE 21", name: "Java SE 21", date: "2023-09-19" },
        { version: "17", name: "Java SE 17", date: "2021-09-14" },
        { version: "20", name: "Java SE 20", date: "2023-03-21" },
        { version: "21", name: "Java SE 21", date: "2023-09-19" },
      ],
      stackovTags: ["java"],
      githubName: "Java",
      languishRanking: 4,
      githubLangId: "181",
      githubColor: "#b07219",
      githubPopular: true,
      githubType: "programming",
    })
    .addInfluencedBy(["pl+c++"])
    .addLicenses(["license+gnu-gpl", "license+gpl"])
    .addParadigms([
      "paradigm+compiled",
      "paradigm+concurrent",
      "paradigm+functional",
      "paradigm+imperative",
      "paradigm+multi",
      "paradigm+oop",
      "paradigm+reflective",
    ])
    .addPlatforms(["plat+android", "plat+apple", "plat+cross", "plat+java", "plat+linux", "plat+windows"])
    .addTags(["tag+app", "tag+compiler", "tag+server"])
    .addTypeSystems(["tsys+manifest", "tsys+nominal", "tsys+safe", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
