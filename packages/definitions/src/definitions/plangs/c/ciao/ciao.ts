import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+ciao", {
      name: "Ciao",
      description:
        "Ciao is a general-purpose programming language which supports logic, constraint, functional, higher-order, and object-oriented programming styles. Its main design objectives are high expressive power, extensibility, safety, reliability, and efficient execution.",
      keywords: ["ciao", "logic", "programming"],
      websites: [
        { title: "www.ciao-lang.org", href: "http://www.ciao-lang.org/", kind: "homepage" },
        { title: "Ciao", href: "https://en.wikipedia.org/wiki/Ciao_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".pl", ".ciao"],
      firstAppeared: "1999-01-01",
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "v1.20", name: "Ciao v1.20", date: "2022-06-01" }],
    })
    .addImplements(["pl+prolog"])
    .addInfluencedBy(["pl+prolog", "pl+scheme"])
    .addLicenses(["license+gnu-gpl", "license+lgpl"])
    .addParadigms(["paradigm+functional", "paradigm+logic", "paradigm+modular", "paradigm+oop"])
    .addPlatforms(["plat+bsd", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+3dg", "tag+compiler", "tag+industrial", "tag+interpreter", "tag+scripting", "tag+shell", "tag+viz"])
    .addTypeSystems(["tsys+dynamic", "tsys+inferred", "tsys+static"]);
}
