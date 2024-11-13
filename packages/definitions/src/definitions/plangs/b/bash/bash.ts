import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+bash", {
      name: "Bash",
      description:
        "Bash, short for Bourne-Again SHell, is a shell program and command language supported by the Free Software Foundation and first developed for the GNU Project by Brian Fox. Designed as a 100% free software alternative for the Bourne shell, it was initially released in 1989. Its moniker is a play on words, referencing both its predecessor, the Bourne shell, and the concept of rebirth.",
      keywords: ["bash", "bourne-again", "command language", "gnu", "shell"],
      websites: [
        { title: "GNU Bash", href: "http://www.gnu.org/software/bash/", kind: "homepage" },
        { title: "Bash on Wikipedia", href: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)", kind: "wikipedia" },
        { title: "Bash on Reddit", kind: "reddit", href: "https://reddit.com/r/bash" },
      ],
      extensions: [".bash", ".sh"],
      year: 1989,
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "5.2.32", name: "Bash 5.2.32", date: "2024-01-01" }],
      stackovTags: ["bash"],
      githubName: "Shell",
      languishRanking: 13,
      githubLangId: "346",
      githubColor: "#89e051",
      githubPopular: true,
      githubType: "programming",
    })
    .addInfluencedBy(["pl+sh"])
    .addLicenses(["license+gnu-gpl"])
    .addParadigms(["paradigm+imperative", "paradigm+procedural", "paradigm+scripting"])
    .addPlatforms(["plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+app", "tag+automation", "tag+cli", "tag+editor", "tag+interpreter", "tag+scripting", "tag+shell"])
    .addTypeSystems(["tsys+untyped"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
