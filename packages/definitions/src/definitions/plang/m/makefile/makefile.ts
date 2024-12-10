import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+makefile", {
      name: "Makefile",
      languishRanking: 38,
      stackovTags: ["makefile"],
      githubName: "Makefile",
      githubLangId: "220",
      githubColor: "#427819",
      githubPopular: false,
      githubType: "programming",
      description:
        "Make is a command-line tool used for build automation primarily on Unix-like operating systems. It operates by reading makefiles, which define how to derive target files from source files by comparing timestamps to decide what needs to be rebuilt.",
      keywords: ["build automation", "dependency management", "makefile", "unix"],
      extensions: [".mk"],
      filenames: ["Makefile", "makefile"],
      extWikipediaPath: "Make_(software)",
      created: "1976",
    })
    .relParadigms.add("para+declarative", "para+macro")
    .relTags.add("tag+automation", "tag+cli");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
