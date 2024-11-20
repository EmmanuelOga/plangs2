import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+freebasic", {
      name: "FreeBASIC",
      description:
        "FreeBASIC is a free/open source (GPL) BASIC compiler for Microsoft Windows, DOS, Linux, FreeBSD, and Xbox, though the Xbox version is no longer maintained. FreeBASIC aims to be syntax-compatible with Microsoft QuickBASIC, offering a command-line compiler to produce console and graphical applications. It supports procedural, object-oriented, and meta-programming paradigms, leveraging GNU Binutils for backend operations.",
      keywords: ["basic", "compiler", "cross-platform", "freebasic", "linux", "open source", "windows"],
      extensions: [".bas", ".bi"],
      releases: [{ version: "1.10.1", name: "", date: "2023-12-25" }],
      stackovTags: ["freebasic"],
      githubName: "FreeBasic",
      githubLangId: "472896659",
      githubColor: "#141AC9",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "FreeBASIC",
      extHomeURL: "http://www.freebasic.net/",
      created: "2004",
    })
    .addImplements(["pl+basic"])
    .addInfluencedBy(["pl+c"])
    .addLicenses(["license+gnu-gpl", "license+lgpl"])
    .addParadigms(["paradigm+compiled", "paradigm+multi", "paradigm+oop", "paradigm+procedural"])
    .addPlatforms(["plat+bsd", "plat+dos", "plat+linux", "plat+windows"])
    .addTags(["tag+app", "tag+compiler", "tag+interpreters", "tag+viz"])
    .addTypeSystems(["tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
