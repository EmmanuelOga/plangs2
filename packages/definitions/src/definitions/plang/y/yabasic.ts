import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+yabasic", {
      name: "Yabasic",
      description:
        "Yet Another BASIC is a BASIC interpreter for Microsoft Windows and UNIX platforms. It is designed for simple programming tasks and offers features like basic control structures, subroutines, and the ability to create standalone executables. It supports line graphics, structured programming, and calls to libraries written in C.",
      shortDesc: "BASIC interpreter with basic graphical capabilities.",
      created: "1995",
      extensions: [".yab"],
      extGithubPath: "marcIhm/yabasic",
      extHomeURL: "https://www.yabasic.de/",
      extWikipediaPath: "Yabasic",
      githubStars: 91,
      isTranspiler: false,
      keywords: [
        "basic",
        "interpreter",
        "open-source",
        "unix",
        "windows",
        "yabasic",
      ],
      releases: [{ version: "2.90.4", date: "2023-09-17" }],
    })
    .relImplements.add("pl+basic")
    .relInfluencedBy.add("pl+basic")
    .relLicenses.add("lic+mit")
    .relParadigms.add(
      "para+general-purpose",
      "para+interpreted",
      "para+procedural",
      "para+scripting",
    )
    .relPlatforms.add("plat+linux", "plat+windows")
    .relTags.add("tag+games", "tag+gui", "tag+interpreters", "tag+scripting")
    .relTypeSystems.add("tsys+dynamic", "tsys+weak")
    .relWrittenWith.add("pl+c");
}
