import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+epigram",
    "Epigram",
    {
      name: "Epigram",
      websites: [
        { kind: "wikipedia", title: "Epigram", href: "https://en.wikipedia.org/wiki/Epigram_(programming_language)" },
        {
          kind: "homepage",
          title: "web.archive.org/web/20120717070845/http://www.e-pig.org/darcs/Pig09/web/",
          href: "https://web.archive.org/web/20120717070845/http://www.e-pig.org/darcs/Pig09/web/",
        },
      ],
      releases: [
        { version: "unknown", date: "2004-01-01", kind: "first" },
        { version: "unknown", date: "2006-10-11", kind: "stable" },
      ],
      references: { license: [{ href: "https://code.google.com/p/epigram/", title: "Epigram – Official website" }] },
    },
    {
      influenced: ["pl+agda", "pl+idris"],
      influences: ["pl+agda", "pl+alf", "pl+idris"],
      licenses: ["lic+mit"],
      paradigms: ["para+functional"],
      people: [["person+conor-mcbride", "designer"]],
      platforms: ["platf+cross-platform", "platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+dependent", "tsys+static", "tsys+strong"],
    },
  );

  /**/
}
