import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+batchfile", {
      name: "Batchfile",
      languishRanking: 37,
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
      isTranspiler: false,
      extWikipediaPath: "Batch_file",
      extRedditPath: "Batch",
      created: "1985",
    })
    .relParadigms.add(["para+procedural", "para+scripting"])
    .relPlatforms.add(["plat+dos", "plat+windows"])
    .relTags.add(["tag+automation", "tag+scripting", "tag+shell"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
