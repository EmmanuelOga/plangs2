import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+tex", {
      name: "TeX",
      description:
        "TeX  (/tɛx/, see below), stylized within the system as TeX, is a typesetting program which was designed and written by computer scientist and Stanford University professor Donald Knuth and first released in 1978. The term now refers to the system of extensions - which includes software programs called TeX engines, sets of TeX macros, and packages which provide extra typesetting functionality - built around the original TeX language.  TeX is a popular means of typesetting complex mathematical formulae; it has been noted as one of the most sophisticated digital typographical systems.",
      websites: [
        { href: "http://tug.org/", title: "tug.org", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/TeX", title: "TeX", kind: "wikipedia" },
      ],
    })
    .addPlatforms(["plat+cross"])
    .addTags(["tag+3dg", "tag+analysis", "tag+industrial", "tag+interpreter", "tag+modeling", "tag+stats", "tag+testing", "tag+viz", "tag+wavelet"])
    .addWrittenIn(["pl+pascal"]);
}
