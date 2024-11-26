import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
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
      releases: [{ version: "15.1", name: "Stable Release", date: "2024-07-07" }],
      extWikipediaPath: "GNU_Debugger",
      extHomeURL: "https://www.gnu.org/software/gdb",
      created: "1986",
    })
    .relLicense.add(["lic+gnu-gpl"])
    .relPlatform.add(["plat+windows"])
    .relTag.add(["tag+cli", "tag+interpreters"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
