import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+elvish", {
      name: "Elvish",
      description:
        "Elvish is a powerful scripting language and versatile interactive shell, offering a rich programming environment with structured data and functional features. It supports cross-platform compatibility with a statically linked binary for Linux, BSDs, macOS, and Windows.",
      keywords: ["elvish", "interactive", "scripting", "shell"],
      extensions: [".elv"],
      releases: [{ version: "0.18.0", name: "Elvish 0.18.0", date: "2023-09-15" }],
      githubName: "Elvish",
      githubLangId: "570996448",
      githubColor: "#55BB55",
      githubPopular: false,
      githubType: "programming",
      extGithubPath: "elves/elvish",
      extHomeURL: "https://elv.sh/",
      created: "2016",
    })
    .addLicenses(["license+bsd", "license+cc-by", "license+epl"])
    .addParadigms(["paradigm+functional", "paradigm+scripting"])
    .addPlatforms(["plat+apple", "plat+bsd", "plat+linux", "plat+raspberry", "plat+windows"])
    .addTags(["tag+cli", "tag+scripting", "tag+shell"])
    .addTypeSystems(["tsys+dynamic"])
    .addWrittenIn(["pl+go"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
