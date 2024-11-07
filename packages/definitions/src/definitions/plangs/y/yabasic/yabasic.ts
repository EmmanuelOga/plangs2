import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+yabasic", {
      name: "Yabasic",
      description:
        "Yabasic (Yet Another BASIC) is a free, open-source BASIC interpreter for Microsoft Windows and Unix platforms. Yabasic allows you to write code for simple computing tasks and has features like loops, arrays, subroutines, and file handling. Although it follows the BASIC language traditions, Yabasic adds extensions to make programs more concise and maintainable. Originally developed in the 1990s, it continues to be maintained and updated, providing a platform for learning and experimenting with BASIC programming.",
      keywords: ["yabasic", "basic", "open-source", "basic interpreter"],
      websites: [
        { title: "www.yabasic.de", href: "http://www.yabasic.de/", kind: "homepage" },
        { title: "GitHub Repository", href: "https://github.com/marcIhm/yabasic", kind: "repository" },
        { title: "Yabasic", href: "https://en.wikipedia.org/wiki/Yabasic", kind: "wikipedia" },
      ],
      extensions: [".yab"],
      year: 1995,
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "2.90.4", name: "Yabasic 2.90.4", date: "2023-01-01" }],
    })
    .addInfluencedBy(["pl+basic"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+interpreted", "paradigm+procedural", "paradigm+scripting"])
    .addPlatforms(["plat+linux", "plat+windows"])
    .addTags(["tag+educational", "tag+games", "tag+interpreter", "tag+scripting", "tag+ui"])
    .addTypeSystems(["tsys+dynamic", "tsys+weak"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
