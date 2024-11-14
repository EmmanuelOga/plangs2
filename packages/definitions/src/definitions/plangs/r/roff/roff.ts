import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+roff", {
      name: "Roff",
      languishRanking: 92,
      websites: [
        { title: "Roff on Wikipedia", href: "https://en.wikipedia.org/wiki/groff_(software)", kind: "wikipedia" },
        { title: "GNU Groff Website", href: "https://www.gnu.org/software/groff/", kind: "homepage" },
        { title: "Roff Reddit Community", href: "https://reddit.com/r/groff", kind: "reddit" },
      ],
      stackovTags: ["groff"],
      githubName: "Roff",
      githubLangId: "141",
      githubColor: "#ecdebe",
      githubPopular: false,
      githubType: "markup",
      description:
        "Roff is a programming language used for typesetting, generating formatted documents from plain-text mixed with commands. It originated from the UNIX operating system and has several derivatives including 'troff' and 'nroff'. Today, 'groff' is its GNU implementation.",
      keywords: ["GNU", "Unix", "groff", "nroff", "roff", "text formatting", "troff", "typesetting"],
      extensions: [".nroff", ".roff", ".troff"],
      year: 1990,
      isTranspiler: true,
      isMainstream: true,
      releases: [
        { version: "1.23.0", name: "Stable Release", date: "2023-07-07" },
        { version: "1.04", name: "First Stable Version", date: "1991-11-01" },
      ],
    })
    .addLicenses(["license+gnu-gpl"])
    .addParadigms(["paradigm+macro"])
    .addPlatforms(["plat+bsd", "plat+linux"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
