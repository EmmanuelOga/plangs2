import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+autohotkey", {
      name: "AutoHotkey",
      description:
        "A free and open-source scripting language for Microsoft Windows. It is primarily used for creating keyboard shortcuts or hotkeys, automating tasks such as macro creation, and modifying user interfaces. AutoHotkey scripts can launch programs, retrieve variables, manipulate windows, and emulate keystrokes or mouse clicks, and can even interact with the Windows API. The language was created to facilitate task automation for users of varying skill levels.",
      shortDesc: "a scripting language for Windows, used to create keyboard shortcuts and automate tasks.",
      created: "2003",
      extensions: [".ahk"],
      extHomeURL: "https://www.autohotkey.com/",
      extRedditPath: "AutoHotkey",
      extWikipediaPath: "AutoHotkey",
      githubColor: "#6594b9",
      githubLangId: "26",
      githubName: "AutoHotkey",
      githubPopular: false,
      githubStars: 0,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["AutoHotkey", "GUI modification", "Windows automation", "automation", "hotkeys", "macros", "scripting", "software automation"],
      languishRanking: 84,
      links: [{ url: "https://www.autohotkey.com/docs/", title: "AutoHotkey Documentation" }],
      releases: [{ version: "2.0.18", name: "", date: "2024-06-06" }],
      stackovTags: ["autohotkey"],
    })
    .relLicenses.add("lic+gnu-gpl")
    .relParadigms.add("para+event-driven", "para+imperative", "para+scripting")
    .relPlatforms.add("plat+windows")
    .relTags.add("tag+automation", "tag+scripting")
    .relTypeSystems.add("tsys+duck", "tsys+dynamic");
}
