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
        { title: "Java on Reddit", kind: "reddit", href: "https://reddit.com/r/java" },
      ],
      extensions: [".java"],
      year: 1995,
      isMainstream: true,
      releases: [
        { version: "17", name: "Java SE 17", date: "2021-09-14" },
        { version: "20", name: "Java SE 20", date: "2023-03-21" },
        { version: "21", name: "Java SE 21", date: "2023-09-19" },
      ],
      github: { name: "Java", langId: "181", color: "#b07219", popular: true, type: "programming" },
      stackovTags: ["java"],
    })
    .addInfluencedBy(["pl+c++"])
    .addLicenses(["license+gpl"])
    .addParadigms(["paradigm+compiled", "paradigm+concurrent", "paradigm+imperative", "paradigm+oop"])
    .addPlatforms(["plat+android", "plat+apple", "plat+cross", "plat+java", "plat+linux", "plat+windows"])
    .addTags(["tag+app", "tag+compiler", "tag+server"])
    .addTypeSystems(["tsys+nominal", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
