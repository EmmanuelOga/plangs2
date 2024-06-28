import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+clu",
    "CLU",
    {
      name: "CLU",
      websites: [
        { kind: "wikipedia", title: "CLU", href: "https://en.wikipedia.org/wiki/CLU_(programming_language)" },
        { kind: "homepage", title: "pmg.csail.mit.edu/CLU.html", href: "http://pmg.csail.mit.edu/CLU.html" },
      ],
      releases: [
        { version: "unknown", date: "1975-01-01", kind: "first" },
        { version: "1.5", date: "1989-05-26", kind: "stable" },
      ],
      references: {
        stable_release: [{ href: "http://pmg.csail.mit.edu/~dcurtis/clu/", title: "CLU home page" }],
        major_implementations: [
          { href: "https://github.com/MITDDC/clu-1976-1989", title: "CLU files, 1976–1989" },
          { href: "http://pmg.csail.mit.edu/~dcurtis/clu/", title: "CLU home page" },
          { href: "http://woodsheep.jp/clu2c.html", title: "clu2c" },
        ],
        influenced: [
          { href: "https://doi.org/10.1145/234286.1057836", title: "A History of C++: 1979--1991" },
          {
            href: "https://web.archive.org/web/20191123043655/http://effbot.org/zone/call-by-object.htm",
            title: "Call By Object",
          },
          { href: "http://nondot.org/sabre/", title: "Chris Lattner's Homepage" },
        ],
      },
    },
    {
      influences: ["pl+algol", "pl+alphard", "pl+lisp", "pl+simula", "pl+simula-67"],
      paradigms: ["para+imperative", "para+multi", "para+objects"],
      people: [["person+barbara-liskov", "designer"]],
      typeSystems: ["tsys+strong"],
    },
  );
}
