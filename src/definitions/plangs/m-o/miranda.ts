import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+miranda",
    "Miranda",
    {
      name: "Miranda",
      websites: [
        { kind: "wikipedia", title: "Miranda", href: "https://en.wikipedia.org/wiki/Miranda_programming_language" },
        { kind: "wikipedia", title: "Miranda", href: "https://en.wikipedia.org/wiki/Miranda_(programming_language)" },
        { kind: "homepage", title: "miranda.org.uk", href: "http://miranda.org.uk" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/3/34/Miranda_logo_%28programming_language%29.jpg",
        },
      ],
      releases: [
        { version: "unknown", date: "1985-01-01", kind: "first" },
        { version: "2.066", date: "2020-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [
          { href: "https://www.cs.kent.ac.uk/people/staff/dat/miranda/downloads/", title: "Miranda download page" },
        ],
        license: [
          { href: "https://www.cs.kent.ac.uk/people/staff/dat/miranda/downloads/COPYING", title: "miranda: COPYING" },
        ],
      },
    },
    {
      influences: ["pl+hope", "pl+iswim", "pl+kent-recursive-calculator", "pl+ml", "pl+sasl"],
      paradigms: ["para+dec", "para+functional", "para+lazy"],
      people: [["person+david-turner", "designer"]],
      typeSystems: ["tsys+static", "tsys+strong"],
    },
  );

  /**/
}
