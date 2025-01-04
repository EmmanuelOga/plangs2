import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+batchfile", {
      name: "Batchfile",
      description:
        "Scripting language used for executing series of commands in DOS, OS/2, and Microsoft Windows environments. Batch files automate routine tasks through script execution in command-line interpreters like COMMAND.COM or cmd.exe.",
      shortDesc:
        "Scripting language for automating tasks in DOS and Windows environments.",
      created: "1985",
      extensions: [".bat", ".btm", ".cmd"],
      extRedditPath: "Batch",
      extWikipediaPath: "Batch_file",
      githubColor: "#C1F12E",
      githubLangId: "29",
      githubName: "Batchfile",
      githubPopular: false,
      githubType: "programming",
      isTranspiler: false,
      keywords: [
        "DOS script",
        "automation",
        "batch script",
        "batchfile",
        "command-line script",
      ],
      languishRanking: 37,
      stackovTags: ["batch-file"],
    })
    .relParadigms.add("para+procedural", "para+scripting")
    .relPlatforms.add("plat+dos", "plat+windows")
    .relTags.add("tag+automation", "tag+scripting", "tag+shell")
    .relTypeSystems.add("tsys+untyped");
}
