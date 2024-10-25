import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+prolog", {
      name: "Prolog",
      description:
        "Prolog is a logic programming language that has its origins in artificial intelligence, automated theorem proving and computational linguistics.",
      keywords: ["prolog"],
      websites: [
        { title: "ISO Prolog - Part 1 and Part 2", href: "https://www.iso.org/standard/21413.html", kind: "other" },
        { title: "ISO Prolog - Information technology", href: "https://www.iso.org/standard/20775.html", kind: "other" },
        { title: "Prolog", href: "https://en.wikipedia.org/wiki/Prolog", kind: "wikipedia" },
      ],
      extensions: [".P", ".pl", ".pro"],
      year: 1972,
      isTranspiler: false,
      isMainstream: true,
    })
    .addImplements(["pl+curry"])
    .addParadigms(["paradigm+logic"])
    .addPlatforms(["plat+cross", "plat+linux", "plat+windows"])
    .addTags([
      "tag+analysis",
      "tag+app",
      "tag+audio-dev",
      "tag+compiler",
      "tag+dbms",
      "tag+framework",
      "tag+industrial",
      "tag+interpreter",
      "tag+low-code",
      "tag+modeling",
      "tag+proofs",
      "tag+ray-tracer",
      "tag+uml",
      "tag+viz",
      "tag+wavelet",
    ])
    .addTypeSystems(["tsys+untyped"]);
}
