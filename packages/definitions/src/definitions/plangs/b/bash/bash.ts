import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+bash", {
      name: "Bash",
      description:
        "Bash, short for Bourne-Again SHell, is a shell program and command language supported by the Free Software Foundation and first developed for the GNU Project by Brian Fox. Designed as a 100% free software alternative for the Bourne shell, it was initially released in 1989. Its moniker is a play on words, referencing both its predecessor, the Bourne shell, and the concept of rebirth.",
      keywords: ["bash", "bourne-again", "shell", "command language", "gnu"],
      websites: [
        { title: "GNU Bash", href: "http://www.gnu.org/software/bash/", kind: "homepage" },
        { title: "Bash (Unix Shell) - Wikipedia", href: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)", kind: "wikipedia" },
      ],
      extensions: [".sh", ".bash"],
      firstAppeared: "1989-06-08",
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "5.2.32", name: "Bash 5.2.32", date: "2024-01-01" }],
    })
    .addInfluencedBy(["pl+sh"])
    .addLicenses(["license+gnu-gpl"])
    .addParadigms(["paradigm+imperative", "paradigm+procedural", "paradigm+scripting"])
    .addPlatforms(["plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+app", "tag+automation", "tag+cli", "tag+editor", "tag+interpreter", "tag+scripting", "tag+shell"])
    .addTypeSystems(["tsys+untyped"])
    .addWrittenIn(["pl+c"]);
}
