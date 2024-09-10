import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+xsb", {
      name: "XSB",
      description:
        "XSB is the name of a dialect of the Prolog programming language and its implementation developed at Stony Brook University in collaboration with the Katholieke Universiteit Leuven, the New University of Lisbon, Uppsala University and software vendor XSB, Inc.",
      extensions: [".P"],
      websites: [
        { href: "https://xsb.sourceforge.net/", title: "Sourceforge.net", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/XSB", title: "XSB", kind: "wikipedia" },
      ],
      releases: [{ version: "5.0", date: "2022-01-01" }],
    })
    .addImplements(["pl+prolog"])
    .addInfluencedBy(["pl+prolog"])
    .addParadigms(["paradigm+logic"])
    .addPlatforms(["plat+cross"]);
}
