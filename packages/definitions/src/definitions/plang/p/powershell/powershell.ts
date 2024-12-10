import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+powershell", {
      name: "PowerShell",
      languishRanking: 25,
      stackovTags: ["powershell"],
      githubName: "PowerShell",
      githubLangId: "293",
      githubColor: "#012456",
      githubPopular: true,
      githubType: "programming",
      description:
        "PowerShell is a task automation and configuration management program from Microsoft, consisting of a command-line shell and the associated scripting language. It is notable for its support for task automation across local and remote systems.",
      keywords: ["Microsoft", "PowerShell", "command-line shell", "configuration management", "cross-platform", "open-source", "task automation"],
      extensions: [".cdxml", ".ps1", ".ps1xml", ".psc1", ".psd1", ".psm1", ".psrc", ".pssc"],
      releases: [
        { version: "7.0", name: "PowerShell 7", date: "2020-03-04" },
        { version: "7.4.6", name: "PowerShell 7.4.6", date: "2024-10-22" },
      ],
      extWikipediaPath: "PowerShell",
      extRedditPath: "PowerShell",
      extHomeURL: "https://microsoft.com/powershell",
      created: "2006",
    })
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+functional", "para+imperative", "para+oop", "para+pipeline", "para+reflective")
    .relPlatforms.add("plat+linux", "plat+windows")
    .relTags.add("tag+automation", "tag+cli", "tag+scripting")
    .relTypeSystems.add("tsys+dynamic", "tsys+safe", "tsys+strong");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
