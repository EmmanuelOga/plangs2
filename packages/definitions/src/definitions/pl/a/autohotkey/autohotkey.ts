import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+autohotkey", {
      name: "AutoHotkey",
      languishRanking: 84,
      stackovTags: ["autohotkey"],
      githubName: "AutoHotkey",
      githubLangId: "26",
      githubColor: "#6594b9",
      githubPopular: false,
      githubType: "programming",
      description:
        "AutoHotkey (AHK) is a free and open-source scripting language for Microsoft Windows. It is primarily used for creating keyboard shortcuts or hotkeys, automating tasks such as macro creation, and modifying user interfaces. AutoHotkey scripts can launch programs, retrieve variables, manipulate windows, and emulate keystrokes or mouse clicks, and can even interact with the Windows API. The language was created to facilitate task automation for users of varying skill levels.",
      keywords: ["AutoHotkey", "GUI modification", "Windows automation", "automation", "hotkeys", "macros", "scripting", "software automation"],
      extensions: [".ahk"],
      year: 2003,
      isTranspiler: true,
      releases: [{ version: "2.0.18", date: "2024-06-06" }],
      extWikipediaPath: "AutoHotkey",
      extRedditPath: "AutoHotkey",
      extGithubPath: "AutoHotkey/AutoHotkey",
      extHomeURL: "https://www.autohotkey.com",
    })
    .addLicenses(["license+gnu-gpl"])
    .addParadigms(["paradigm+event-driven", "paradigm+imperative", "paradigm+scripting"])
    .addPlatforms(["plat+windows"])
    .addTags(["tag+automation", "tag+scripting"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
