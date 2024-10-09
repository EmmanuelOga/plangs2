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
      ],
      extensions: [".tex"],
      firstAppeared: "1978-05-30",
      images: [{ kind: "logo", title: "TeX Logo", url: "https://upload.wikimedia.org/wikipedia/commons/1/14/TeX_logo.svg", width: 512, height: 512 }],
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "3.14159265", name: "TeX 3", date: "1989-11-01" }],
    })
    .addLicenses(["license+public-domain"])
    .addParadigms(["paradigm+declarative", "paradigm+dsl", "paradigm+macro"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+document", "tag+editor", "tag+graphics", "tag+print", "tag+sci", "tag+typesetting"])
    .addWrittenIn(["pl+pascal"]);
}
