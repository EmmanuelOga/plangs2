import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
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
      isTranspiler: false,
      shortDesc: "Elvish is a versatile scripting language and interactive shell with cross-platform binary support.",
      githubStars: 5800,
      ghRepoCreated: "2016-11-19",
    })
    .relLicenses.add("lic+bsd", "lic+cc-by", "lic+epl")
    .relParadigms.add("para+functional", "para+scripting")
    .relPlatforms.add("plat+apple", "plat+bsd", "plat+linux", "plat+raspberry", "plat+windows")
    .relTags.add("tag+cli", "tag+scripting", "tag+shell")
    .relTypeSystems.add("tsys+dynamic")
    .relWrittenWith.add("pl+go");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
