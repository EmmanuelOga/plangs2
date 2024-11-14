import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+tex", {
      name: "TeX",
      description:
        "TeX (/tɛx/, see below), stylized within the system as TeX, is a typesetting program which was designed and written by computer scientist and Stanford University professor Donald Knuth and first released in 1978. The term now refers to the system of extensions - which includes software programs called TeX engines, sets of TeX macros, and packages which provide extra typesetting functionality - built around the original TeX language. TeX is a popular means of typesetting complex mathematical formulae; it has been noted as one of the most sophisticated digital typographical systems.",
      keywords: ["tex", "latex", "typesetting", "typography"],
      websites: [
        { title: "TeX Users Group (TUG)", href: "http://tug.org/", kind: "other" },
        { title: "TeX - Wikipedia", href: "https://en.wikipedia.org/wiki/TeX", kind: "wikipedia" },
        { title: "TeX on Reddit", href: "https://reddit.com/r/LaTeX", kind: "reddit" },
      ],
      extensions: [".tex"],
      year: 1978,
      isMainstream: true,
      releases: [{ version: "3.14159265", name: "TeX 3", date: "2021-01-01" }],
      stackovTags: ["latex"],
      githubName: "TeX",
      languishRanking: 39,
      githubLangId: "369",
      githubColor: "#3D6117",
      githubPopular: false,
      githubType: "markup",
    })
    .addLicenses(["license+public-domain"])
    .addParadigms(["paradigm+declarative", "paradigm+dsl", "paradigm+macro"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+document", "tag+editor", "tag+graphics", "tag+print", "tag+sci", "tag+typesetting"])
    .addWrittenIn(["pl+pascal"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
