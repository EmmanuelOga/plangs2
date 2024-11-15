import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+mcfunction", {
      name: "mcfunction",
      languishRanking: 96,
      githubName: "mcfunction",
      githubLangId: "462488745",
      githubColor: "#E22837",
      githubPopular: false,
      githubType: "programming",
      stackovTags: ["minecraft"],
      description:
        "mcfunction is the function file format used in Minecraft to run a set of commands in sequence, forming a data-driven approach to game logic and custom scripting within the game.",
      keywords: ["Minecraft", "functions", "games", "mcfunction", "scripting"],
      extensions: [".mcfunction"],
      year: 2017,
      isTranspiler: false,
      isMainstream: true,
      extRedditPath: "MinecraftCommands",
      extHomeURL: "https://minecraft.fandom.com/wiki/Functions",
    })
    .addParadigms(["paradigm+data-driven", "paradigm+scripting"])
    .addPlatforms(["plat+apple", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+games", "tag+scripting"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
