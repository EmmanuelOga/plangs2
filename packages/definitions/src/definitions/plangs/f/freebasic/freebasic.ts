import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+freebasic", {
      name: "FreeBASIC",
      description:
        "FreeBASIC is a free and open-source, multi-platform compiler and programming language based on BASIC licensed under the GNU GPL for Microsoft Windows, protected-mode MS-DOS (DOS extender), Linux, and FreeBSD. It is designed to be syntax-compatible with QuickBASIC, but it also provides many features found in modern programming languages.",
      keywords: ["freebasic", "basic", "compiler", "open source"],
      websites: [
        { title: "www.freebasic.net", href: "http://www.freebasic.net/", kind: "homepage" },
        { title: "FreeBASIC", href: "https://en.wikipedia.org/wiki/FreeBASIC", kind: "wikipedia" },
      ],
      extensions: [".bas", ".bi"],
      year: 2004,
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "1.10.1", name: "", date: "2023-01-01" }],
      github: { name: "FreeBasic", langId: "472896659", color: "#141AC9", popular: false, type: "programming" },
      stackovTags: ["freebasic"],
      githubName: "FreeBasic",
      languishRanking: 231,
    })
    .addImplements(["pl+basic"])
    .addInfluencedBy(["pl+c", "pl+quickbasic"])
    .addLicenses(["license+gnu-gpl"])
    .addParadigms(["paradigm+compiled", "paradigm+multi", "paradigm+oop", "paradigm+procedural"])
    .addPlatforms(["plat+bsd", "plat+dos", "plat+linux", "plat+windows"])
    .addTags(["tag+app", "tag+compiler", "tag+interpreter", "tag+viz"])
    .addTypeSystems(["tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
