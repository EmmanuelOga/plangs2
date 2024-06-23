import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+swi-prolog",
    "SWI-Prolog",
    {
      name: "SWI-Prolog",
      websites: [
        { kind: "wikipedia", title: "SWI-Prolog", href: "https://en.wikipedia.org/wiki/SWI-Prolog" },
        { kind: "homepage", title: "swi-prolog.org", href: "http://swi-prolog.org" },
      ],
      releases: [
        { version: "unknown", date: "1987-01-01", kind: "first" },
        { version: "9.2.2", date: "2024-01-01", kind: "stable" },
        { version: "9.3.2", date: "2024-02-29", kind: "preview" },
      ],
      references: {
        stable_release: [{ href: "https://github.com/SWI-Prolog/swipl/releases/tag/V9.2.2", title: "Release V9.2.2" }],
      },
    },
    {
      licenses: ["lic+bsd-s", "lic+lgpl"],
      people: [
        ["person+anjo-anjewierden", "designer"],
        ["person+jan-wielemaker", "designer"],
      ],
    },
  );

  /**/
}
