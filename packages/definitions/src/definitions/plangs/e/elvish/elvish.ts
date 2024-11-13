import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+elvish", {
      name: "Elvish",
      description:
        "Elvish is a powerful scripting language and versatile interactive shell, offering a rich programming environment with structured data and functional features. It supports cross-platform compatibility with a statically linked binary for Linux, BSDs, macOS, and Windows.",
      keywords: ["elvish", "interactive", "scripting", "shell"],
      websites: [
        { title: "Elvish Shell", href: "https://elv.sh/", kind: "homepage" },
        {
          title: "elves/elvish: Powerful scripting language & versatile interactive shell",
          href: "https://github.com/elves/elvish/wiki",
          kind: "wikipedia",
        },
        {
          title: "elves/elvish: Powerful scripting language & versatile interactive shell",
          href: "https://github.com/elves/elvish",
          kind: "repository",
        },
      ],
      extensions: [".elv"],
      year: 2016,
      releases: [{ version: "0.18.0", name: "Elvish 0.18.0", date: "2023-09-15" }],
      githubName: "Elvish",
      githubLangId: "570996448",
      githubColor: "#55BB55",
      githubPopular: false,
      githubType: "programming",
      isMainstream: false,
    })
    .addInfluencedBy(["pl+fish", "pl+zsh"])
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
