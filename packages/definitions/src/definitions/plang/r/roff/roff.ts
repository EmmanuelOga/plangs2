import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+roff", {
      name: "Roff",
      description:
        "Roff is a programming language used for typesetting, generating formatted documents from plain-text mixed with commands. It originated from the UNIX operating system and has several derivatives including 'troff' and 'nroff'. Today, 'groff' is its GNU implementation.",
      shortDesc: "Roff is a typesetting language originating from UNIX, known for derivatives like 'troff' and 'nroff'.",
      created: "1990",
      extensions: [".nroff", ".roff", ".troff"],
      extHomeURL: "https://www.gnu.org/software/groff/",
      extRedditPath: "groff",
      extWikipediaPath: "groff_(software)",
      githubColor: "#ecdebe",
      githubLangId: "141",
      githubName: "Roff",
      githubPopular: false,
      githubType: "markup",
      isTranspiler: true,
      keywords: ["GNU", "Unix", "groff", "nroff", "roff", "text formatting", "troff", "typesetting"],
      languishRanking: 92,
      releases: [
        { version: "1.23.0", name: "Stable Release", date: "2023-07-07" },
        { version: "1.04", name: "First Stable Version", date: "1991-11-01" },
      ],
      stackovTags: ["groff"],
    })
    .relLicenses.add("lic+gnu-gpl")
    .relParadigms.add("para+macro")
    .relPlatforms.add("plat+bsd", "plat+linux");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
