import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+powershell", {
      name: "PowerShell",
      languishRanking: 25,
      websites: [
        { title: "Microsoft PowerShell", href: "https://microsoft.com/powershell", kind: "homepage" },
        { title: "PowerShell on Wikipedia", href: "https://en.wikipedia.org/wiki/PowerShell", kind: "wikipedia" },
        { kind: "reddit", title: "PowerShell on Reddit", href: "https://reddit.com/r/PowerShell" },
      ],
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
      year: 2006,
      isMainstream: true,
      releases: [
        { version: "7.0", name: "PowerShell 7", date: "2020-03-04" },
        { version: "7.4.6", name: "PowerShell 7.4.6", date: "2024-10-22" },
      ],
    })
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+oop", "paradigm+pipeline", "paradigm+reflective"])
    .addPlatforms(["plat+linux", "plat+windows"])
    .addTags(["tag+automation", "tag+cli", "tag+scripting"])
    .addTypeSystems(["tsys+dynamic", "tsys+safe", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
