import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+d", {
      name: "D",
      description:
        "D, also known as dlang, is a multi-paradigm system programming language created by Walter Bright at Digital Mars and released in 2001. Andrei Alexandrescu joined the design and development effort in 2007. Though it originated as a re-engineering of C++, D is now a very different language. As it has developed, it has drawn inspiration from other high-level programming languages. Notably, it has been influenced by Java, Python, Ruby, C#, and Eiffel.",
      keywords: ["dlang", "d programming", "d language"],
      websites: [
        { title: "dlang.org", href: "http://dlang.org/", kind: "homepage" },
        { title: "D", href: "https://en.wikipedia.org/wiki/D_(programming_language)", kind: "wikipedia" },
        { title: "D on Reddit", kind: "reddit", href: "https://reddit.com/r/d_language" },
      ],
      extensions: [".d"],
      year: 2001,
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "2.109.1", name: "D 2.109.1", date: "2024-01-01" }],
      github: { name: "D", langId: "80", color: "#ba595e", popular: false, type: "programming" },
      stackovTags: ["d"],
      githubName: "D",
      languishRanking: 104,
    })
    .addInfluencedBy(["pl+ada", "pl+basic", "pl+c", "pl+c++", "pl+c-sharp", "pl+eiffel", "pl+python", "pl+ruby"])
    .addLicenses(["license+boost"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+oop"])
    .addPlatforms(["plat+apple", "plat+bsd", "plat+linux", "plat+windows"])
    .addTags([
      "tag+analysis",
      "tag+app",
      "tag+asm",
      "tag+compiler",
      "tag+games",
      "tag+industrial",
      "tag+interpreter",
      "tag+numeric",
      "tag+sci",
      "tag+ui",
      "tag+viz",
    ])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
