import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+tex", {
      name: "TeX",
      description:
        "TeX (/tɛx/, see below), stylized within the system as TeX, is a typesetting program which was designed and written by computer scientist and Stanford University professor Donald Knuth and first released in 1978. The term now refers to the system of extensions - which includes software programs called TeX engines, sets of TeX macros, and packages which provide extra typesetting functionality - built around the original TeX language. TeX is a popular means of typesetting complex mathematical formulae; it has been noted as one of the most sophisticated digital typographical systems.",
      keywords: ["tex", "latex"],
      websites: [
        { title: "tug.org", href: "http://tug.org/", kind: "other" },
        { title: "TeX", href: "https://en.wikipedia.org/wiki/TeX", kind: "wikipedia" },
        { title: "TeX on Reddit", kind: "reddit", href: "https://reddit.com/r/LaTeX" },
        { title: "TeX on Wikipedia", kind: "wikipedia", href: "https://en.wikipedia.org/wiki/LaTeX" },
      ],
      extensions: [".tex"],
      year: 1978,
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "3.14159265", name: "TeX 3", date: "1989-11-01" }],
      github: { name: "TeX", langId: "369", color: "#3D6117", popular: false, type: "markup" },
      stackovTags: ["latex"],
      githubName: "TeX",
      languishRanking: 27,
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
