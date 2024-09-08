import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+ciao", {
      images: [{ title: "Ciao", kind: "logo", url: "/images/plangs/c/ciao/main.png" }],
      name: "Ciao",
      description:
        "Ciao is a general-purpose programming language which supports logic, constraint, functional, higher-order, and object-oriented programming styles. Its main design objectives are high expressive power, extensibility, safety, reliability, and efficient execution.",
      websites: [
        { href: "http://www.ciao-lang.org/", title: "www.ciao-lang.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Ciao_(programming_language)", title: "Ciao", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [],
    })
    .addImplements(["pl+prolog"])
    .addInfluencedBy(["pl+prolog"])
    .addLicenses(["lic+gnu-gpl", "lic+lgpl"])
    .addParadigms(["para+functional", "para+logic", "para+modular", "para+oop"])
    .addPlatforms(["platf+cross", "platf+windows"]);
}
