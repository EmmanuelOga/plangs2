import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+batchfile", {
      name: "Batchfile",
      languishRanking: 37,
      websites: [{ title: "Batchfile on Wikipedia", href: "https://en.wikipedia.org/wiki/Batch_file", kind: "wikipedia" }],
      stackovTags: ["batch-file"],
      githubName: "Batchfile",
      githubLangId: "29",
      githubColor: "#C1F12E",
      githubPopular: false,
      githubType: "programming",
      description:
        "A scripting language used for executing series of commands in DOS, OS/2, and Microsoft Windows environments. Batch files automate routine tasks through script execution in command-line interpreters like COMMAND.COM or cmd.exe.",
      keywords: ["DOS script", "automation", "batch script", "batchfile", "command-line script"],
      extensions: [".bat", ".btm", ".cmd"],
      year: 1985,
      isTranspiler: false,
      isMainstream: true,
    })
    .addParadigms(["paradigm+procedural", "paradigm+scripting"])
    .addPlatforms(["plat+dos", "plat+windows"])
    .addTags(["tag+automation", "tag+scripting", "tag+shell"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
