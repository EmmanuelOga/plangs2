import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+gdb", {
      name: "GDB",
      languishRanking: 90,
      stackovTags: ["gdb"],
      githubName: "GDB",
      githubLangId: "122",
      githubPopular: false,
      githubType: "programming",
      description:
        "The GNU Debugger (GDB) is a portable debugger that runs on many Unix-like systems and works for various programming languages. It provides facilities for tracing and altering program execution.",
      keywords: ["Debugger", "Free Software", "GDB", "GNU Debugger", "GPL"],
      year: 1986,
      releases: [{ version: "15.1", name: "Stable Release", date: "2024-07-07" }],
      extWikipediaPath: "GNU_Debugger",
      extHomeURL: "https://www.gnu.org/software/gdb",
    })
    .addLicenses(["license+gnu-gpl"])
    .addPlatforms(["plat+windows"])
    .addTags(["tag+cli", "tag+interpreter"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
