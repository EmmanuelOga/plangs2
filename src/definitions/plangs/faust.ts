import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+faust",
    "FAUST",
    {
      name: "FAUST",
      websites: [
        { kind: "wikipedia", title: "FAUST", href: "https://en.wikipedia.org/wiki/FAUST_(programming_language)" },
        { kind: "homepage", title: "faust.grame.fr", href: "http://faust.grame.fr" },
      ],
      releases: [
        { version: "unknown", date: "2002-01-01", kind: "first" },
        { version: "2.60.3", date: "2023-06-14", kind: "stable" },
      ],
      references: {
        stable_release: [
          { href: "https://github.com/grame-cncm/faust/releases", title: "Releases · grame-cncm/faust · GitHub" },
        ],
      },
    },
    { licenses: ["lic+gpl"] },
  );

  /**/
}
