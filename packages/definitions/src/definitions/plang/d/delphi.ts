import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+delphi", {
      name: "Delphi",
      description:
        "General-purpose programming language and a software product that uses the Delphi dialect of the Object Pascal programming language and provides an integrated development environment (IDE) for rapid application development of desktop, mobile, web, and console software. It is currently developed and maintained by Embarcadero Technologies.",
      shortDesc:
        "General-purpose programming language with an IDE for rapid application development, using the Delphi dialect of Object Pascal.",
      created: "1995",
      extensions: [".dpr", ".pas"],
      extHomeURL: "https://www.embarcadero.com/products/delphi",
      extRedditPath: "pascal",
      extWikipediaPath: "Pascal_(programming_language)",
      githubColor: "#E3F171",
      githubLangId: "281",
      githubName: "Pascal",
      githubPopular: false,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["delphi", "object pascal"],
      languishRanking: 50,
      releases: [
        { version: "12.2", name: "RAD Studio 12.2 Athens", date: "2024-09-12" },
        { version: "11.3", name: "Delphi 11.3", date: "2023-03-01" },
        { version: "12.1", name: "Delphi 12.1", date: "2024-01-01" },
      ],
      stackovTags: ["delphi", "pascal"],
    })
    .relDialectOf.add("pl+pascal")
    .relImplements.add("pl+pascal")
    .relParadigms.add(
      "para+compiled",
      "para+general-purpose",
      "para+multi",
      "para+oop",
      "para+procedural",
    )
    .relPlatforms.add(
      "plat+android",
      "plat+apple",
      "plat+linux",
      "plat+windows",
    )
    .relTags.add(
      "tag+asm",
      "tag+automation",
      "tag+compiler",
      "tag+control",
      "tag+dbms",
      "tag+editor",
      "tag+framework",
      "tag+gui",
      "tag+industrial",
      "tag+interpreters",
      "tag+rad",
      "tag+uml",
      "tag+viz",
    )
    .relTypeSystems.add("tsys+object", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+c++");
}
