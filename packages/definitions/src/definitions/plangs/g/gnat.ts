import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+gnat", {
      images: [{ title: "GNAT", kind: "other", url: "/images/plangs/g/gnat/main.png" }],
      name: "GNAT",
      description:
        "GNAT is a free-software compiler for the Ada programming language which forms part of the GNU Compiler Collection (GCC). It supports all versions of the language, i.e. Ada 2012, Ada 2005, Ada 95 and Ada 83. Originally its name was an acronym that stood for GNU NYU Ada Translator, but that name no longer applies. The front-end and run-time are written in Ada.",
      websites: [
        { href: "http://www.getadanow.com/", title: "www.getadanow.com", kind: "other" },
        { href: "http://www.adacore.com/gnatpro/", title: "www.adacore.com/gnatpro/", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/GNAT", title: "GNAT", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [{ version: "14.1", date: "2024-05-07" }],
    })
    .addImplements(["pl+ada"])
    .addLicenses(["lic+gnu-gpl"])
    .addPlatforms(["platf+bsd", "platf+linux", "platf+windows"])
    .addTags(["tag+compiler"]);
}
