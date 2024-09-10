import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+ciao", {
      name: "Ciao",
      description:
        "Ciao is a general-purpose programming language which supports logic, constraint, functional, higher-order, and object-oriented programming styles. Its main design objectives are high expressive power, extensibility, safety, reliability, and efficient execution.",
      firstAppeared: "1984-01-01",
      websites: [
        { href: "http://www.ciao-lang.org/", title: "www.ciao-lang.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Ciao_(programming_language)", title: "Ciao", kind: "wikipedia" },
      ],
      images: [{ kind: "logo", title: "Ciao", url: "/images/plangs/c/ciao/logo.png" }],
    })
    .addImplements(["pl+prolog"])
    .addInfluencedBy(["pl+prolog"])
    .addLicenses(["license+gnu-gpl", "license+lgpl"])
    .addParadigms(["paradigm+functional", "paradigm+logic", "paradigm+modular", "paradigm+oop"])
    .addPlatforms(["plat+cross", "plat+windows"]);
}
