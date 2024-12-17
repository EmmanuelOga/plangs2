import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+gdb", {
      name: "GDB",
      description:
        "The GNU Debugger is a portable debugger that runs on many Unix-like systems and works for various programming languages. It provides facilities for tracing and altering program execution.",
      shortDesc: "Portable debugger for Unix-like systems supporting various languages.",
      created: "1986",
      extensions: [".gdb"],
      extHomeURL: "https://www.gnu.org/software/gdb",
      extWikipediaPath: "GNU_Debugger",
      filenames: ["gdbinit"],
      githubLangId: "122",
      githubName: "GDB",
      githubPopular: false,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["debugger", "gdb", "gnu debugger", "unix debugger"],
      languishRanking: 90,
      releases: [{ version: "15.1", name: "Stable Release", date: "2024-07-07" }],
      stackovTags: ["gdb"],
    })
    .relLicenses.add("lic+gnu-gpl")
    .relPlatforms.add("plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+cli", "tag+interpreters");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
