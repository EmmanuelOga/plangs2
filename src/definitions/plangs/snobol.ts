import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+snobol",
    "SNOBOL",
    {
      name: "SNOBOL",
      websites: [
        { kind: "wikipedia", title: "SNOBOL", href: "https://en.wikipedia.org/wiki/SNOBOL" },
        { kind: "homepage", title: "https://www.regressive.org/snobol4/", href: "https://www.regressive.org/snobol4/" },
      ],
      releases: [
        { version: "unknown", date: "1962-01-01", kind: "first" },
        { version: "unknown", date: "1967-01-01", kind: "stable" },
      ],
      references: {
        influenced: [
          {
            href: "https://www.lua.org/doc/hopl.pdf",
            title: "Proceedings of the third ACM SIGPLAN conference on History of programming languages",
          },
        ],
      },
    },
    {
      dialects: ["pl+icon-programming-language"],
      implementations: ["pl+spitbol"],
      influenced: ["pl+awk", "pl+bs", "pl+comit", "pl+icon-programming-language", "pl+lua", "pl+tmg"],
      influences: ["pl+awk", "pl+bs", "pl+comit", "pl+icon", "pl+lua"],
      paradigms: ["para+imperative", "para+unstructured"],
      people: [
        ["person+david-j-farber", "designer"],
        ["person+ralph-griswold", "designer"],
      ],
    },
  );

  /**/
}
