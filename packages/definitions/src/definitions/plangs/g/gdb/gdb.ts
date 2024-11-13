import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+gdb", {
      name: "GDB",
      languishRanking: 90,
      websites: [
        { title: "GNU Debugger - Wikipedia", href: "https://en.wikipedia.org/wiki/GNU_Debugger", kind: "wikipedia" },
        { title: "GDB Official Website", href: "https://www.gnu.org/software/gdb", kind: "homepage" },
      ],
      stackovTags: ["gdb"],
      githubName: "GDB",
      githubLangId: "122",
      githubPopular: false,
      githubType: "programming",
      description:
        "The GNU Debugger (GDB) is a portable debugger that runs on many Unix-like systems and works for various programming languages. It provides facilities for tracing and altering program execution.",
      keywords: ["Debugger", "Free Software", "GDB", "GNU Debugger", "GPL"],
      year: 1986,
      isMainstream: true,
      releases: [{ version: "15.1", name: "Stable Release", date: "2024-07-07" }],
    })
    .addLicenses(["license+gnu-gpl"])
    .addPlatforms(["plat+windows"])
    .addTags(["tag+cli", "tag+interpreter"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
