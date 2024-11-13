import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+delphi", {
      name: "Delphi",
      description:
        "Delphi is a general-purpose programming language and a software product that uses the Delphi dialect of the Object Pascal programming language and provides an integrated development environment (IDE) for rapid application development of desktop, mobile, web, and console software. It is currently developed and maintained by Embarcadero Technologies.",
      keywords: ["delphi", "object pascal"],
      websites: [
        { title: "Delphi: IDE Software Overview - Embarcadero", href: "https://www.embarcadero.com/products/delphi", kind: "homepage" },
        { title: "Delphi (software) - Wikipedia", href: "https://en.wikipedia.org/wiki/Delphi_(software)", kind: "wikipedia" },
        { title: "Delphi on Reddit", href: "https://reddit.com/r/delphi", kind: "reddit" },
      ],
      extensions: [".dpr", ".pas"],
      year: 1995,
      isMainstream: true,
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
      images: [
        {
          kind: "screenshot",
          title: "Screenshot of Delphi 10.4, with the visual form editor being used to create an application",
          url: "https://en.wikipedia.org/wiki/File:Delphi_10.4.png",
          width: 800,
          height: 600,
        },
      ],
    })
    .addDialectOf(["pl+pascal"])
    .addImplements(["pl+pascal"])
    .addLicenses(["license+proprietary"])
    .addParadigms(["paradigm+compiled", "paradigm+multi", "paradigm+oop", "paradigm+procedural"])
    .addPlatforms(["plat+android", "plat+apple", "plat+linux", "plat+windows"])
    .addTags([
      "tag+asm",
      "tag+automation",
      "tag+compiler",
      "tag+dbms",
      "tag+editor",
      "tag+framework",
      "tag+industrial",
      "tag+instrument_control",
      "tag+interpreter",
      "tag+rad",
      "tag+ui",
      "tag+uml",
      "tag+viz",
    ])
    .addTypeSystems(["tsys+object", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+c++"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
