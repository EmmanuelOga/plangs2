import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+bash", {
      images: [{ title: "Bash", kind: "screenshot", url: "/images/plangs/b/bash/main.png" }],
      name: "Bash",
      description:
        "Bash, short for Bourne-Again SHell, is a shell program and command language  supported by the Free Software Foundation and first developed for the GNU Project by Brian Fox. Designed as a 100% free software alternative for the Bourne shell, it was initially released in 1989. Its moniker is a play on words, referencing both its predecessor, the Bourne shell, and the concept of rebirth.",
      websites: [
        { href: "http://www.gnu.org/software/bash/", title: "www.gnu.org/software/bash/", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)", title: "Bash", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [{ version: "5.2.32", date: "2024-01-01" }],
    })
    .addLicenses(["lic+gnu-gpl"])
    .addPlatforms(["platf+apple", "platf+windows"])
    .addTags(["tag+scripting"])
    .addWrittenIn(["pl+c"]);
}
