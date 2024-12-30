import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+powershell", {
      name: "PowerShell",
      description:
        "Task automation and configuration management framework from Microsoft, providing a command-line shell and scripting language for automating administrative tasks.",
      shortDesc: "Shell and scripting language from Microsoft.",
      created: "2006",
      extensions: [".cdxml", ".ps1", ".ps1xml", ".psc1", ".psd1", ".psm1", ".psrc", ".pssc"],
      extGithubPath: "PowerShell/PowerShell",
      extHomeURL: "https://microsoft.com/PowerShell",
      extRedditPath: "PowerShell",
      extWikipediaPath: "PowerShell",
      githubColor: "#012456",
      githubLangId: "293",
      githubName: "PowerShell",
      githubPopular: true,
      githubStars: 45800,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["automation", "command-line", "microsoft", "powershell", "scripting"],
      languishRanking: 25,
      releases: [
        { version: "7.0", name: "PowerShell 7", date: "2020-03-04" },
        { version: "7.4.6", name: "PowerShell 7.4.6", date: "2024-10-22" },
      ],
      stackovTags: ["powershell"],
    })
    .relInfluencedBy.add("pl+batchfile")
    .relLicenses.add("lic+mit")
    .relParadigms.add("para+functional", "para+imperative", "para+oop", "para+pipeline", "para+reflective")
    .relPlatforms.add("plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+automation", "tag+cli", "tag+scripting")
    .relTypeSystems.add("tsys+dynamic", "tsys+safe", "tsys+strong");
}
