import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+delphi", {
      name: "Delphi",
      description:
        "Delphi is a general-purpose programming language and a software product that uses the Delphi dialect of the Object Pascal programming language and provides an integrated development environment (IDE) for rapid application development of desktop, mobile, web, and console software. It is currently developed and maintained by Embarcadero Technologies.",
      keywords: ["delphi", "object pascal"],
      extensions: [".dpr", ".pas"],
      releases: [
        { version: "12.2", name: "RAD Studio 12.2 Athens", date: "2024-09-12" },
        { version: "11.3", name: "Delphi 11.3", date: "2023-03-01" },
        { version: "12.1", name: "Delphi 12.1", date: "2024-01-01" },
      ],
      githubName: "Pascal",
      languishRanking: 58,
      stackovTags: ["delphi", "pascal"],
      githubLangId: "281",
      githubColor: "#E3F171",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Pascal_(programming_language)",
      extRedditPath: "pascal",
      extHomeURL: "https://www.embarcadero.com/products/delphi",
      created: "1995",
    })
    .relDialectOf.add(["pl+pascal"])
    .relImplement.add(["pl+pascal"])
    .relParadigm.add(["para+compiled", "para+multi", "para+oop", "para+procedural"])
    .relPlatform.add(["plat+android", "plat+apple", "plat+linux", "plat+windows"])
    .relTag.add([
      "tag+asm",
      "tag+automation",
      "tag+compiler",
      "tag+control",
      "tag+dbms",
      "tag+editor",
      "tag+framework",
      "tag+industrial",
      "tag+interpreters",
      "tag+rad",
      "tag+ui",
      "tag+uml",
      "tag+viz",
    ])
    .relTypeSystem.add(["tsys+object", "tsys+static", "tsys+strong"])
    .relWrittenInPlang.add(["pl+c++"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
