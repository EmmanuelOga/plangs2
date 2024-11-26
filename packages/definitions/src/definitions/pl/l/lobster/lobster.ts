import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang.    .set("pl+lobster", {
      name: "Lobster",
      description:
        "Lobster is a statically typed programming language with a Python-esque syntax that combines the advantages of an expressive type system and compile-time memory management with a very lightweight, friendly and terse syntax, by doing most of the heavy lifting for you. It is especially oriented towards game development, offering features tailored for graphical applications.",
      keywords: ["game development", "lobster", "programming language", "static typing"],
      extensions: [".lobster"],
      releases: [{ version: "1.0", name: "Initial Release", date: "2016-01-01" }],
      extGithubPath: "aardappel/lobster",
      extHomeURL: "https://strlen.com/lobster/",
      created: "2016",
    })
    .relInfluencedBy.add(["pl+python"])
    .relLicense.add(["license+apache", "license+zlib"])
    .relParadigm.add(["para+compiled", "para+functional", "para+multi", "para+oop"])
    .relPlatforms.add(["plat+cross", "plat+linux", "plat+web", "plat+windows"])
    .relTags.add(["tag+games", "tag+scripting"])
    .relTsys.add(["tsys+inferred", "tsys+static", "tsys+strong"])
    .relWrittenIn.add(["pl+c++"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
