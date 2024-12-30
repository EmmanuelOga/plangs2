import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+makefile", {
      name: "Makefile",
      description:
        "Command-line tool used for build automation primarily on Unix-like operating systems. It operates by reading makefiles, which define how to derive target files from source files by comparing timestamps to decide what needs to be rebuilt.",
      shortDesc: "Tool used for build automation, defining build tasks in makefiles based on file timestamps.",
      created: "1976",
      extensions: [".mk"],
      extWikipediaPath: "Make_(software)",
      filenames: ["Makefile", "makefile"],
      githubColor: "#427819",
      githubLangId: "220",
      githubName: "Makefile",
      githubPopular: false,
      githubType: "programming",
      isTranspiler: true,
      keywords: ["build automation", "dependency management", "makefile", "unix"],
      languishRanking: 38,
      stackovTags: ["makefile"],
    })
    .relParadigms.add("para+declarative", "para+macro")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+automation", "tag+cli");
}
