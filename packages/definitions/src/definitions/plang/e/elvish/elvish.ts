import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+elvish", {
      name: "Elvish",
      description:
        "Elvish is a powerful scripting language and versatile interactive shell, offering a rich programming environment with structured data and functional features. It supports cross-platform compatibility with a statically linked binary for Linux, BSDs, macOS, and Windows.",
      shortDesc: "Elvish is a versatile scripting language and interactive shell with cross-platform binary support.",
      created: "2016",
      extensions: [".elv"],
      extGithubPath: "elves/elvish",
      extHomeURL: "https://elv.sh/",
      githubColor: "#55BB55",
      githubLangId: "570996448",
      githubName: "Elvish",
      githubPopular: false,
      githubStars: 5800,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["elvish", "interactive", "scripting", "shell"],
      releases: [{ version: "0.18.0", name: "Elvish 0.18.0", date: "2023-09-15" }],
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
