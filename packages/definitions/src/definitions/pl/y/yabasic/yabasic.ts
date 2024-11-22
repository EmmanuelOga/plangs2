import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+yabasic", {
      name: "Yabasic",
      description:
        "Yabasic (Yet Another BASIC) is a free, open-source BASIC interpreter for Microsoft Windows and UNIX platforms. It is designed for simple programming tasks and offers features like basic control structures, subroutines, and the ability to create standalone executables. It supports line graphics, structured programming, and calls to libraries written in C.",
      keywords: ["basic", "interpreter", "open-source", "unix", "windows", "yabasic"],
      extensions: [".yab"],
      releases: [{ version: "2.90.4", name: "Yabasic 2.90.4", date: "2023-09-17" }],
      extGithubPath: "marcIhm/yabasic",
      extWikipediaPath: "Yabasic",
      extHomeURL: "http://www.yabasic.de/",
      created: "1995",
    })
    .relImplements.add(["pl+basic"])
    .relInfluencedBy.add(["pl+basic"])
    .relLicenses.add(["license+mit"])
    .relParadigms.add(["paradigm+interpreted", "paradigm+procedural", "paradigm+scripting"])
    .relPlatforms.add(["plat+linux", "plat+windows"])
    .relTags.add(["tag+games", "tag+interpreters", "tag+scripting", "tag+ui"])
    .relTsys.add(["tsys+dynamic", "tsys+weak"])
    .relWrittenIn.add(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
