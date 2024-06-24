import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+gnu-prolog",
    "GNU Prolog",
    {
      name: "GNU Prolog",
      websites: [
        { kind: "wikipedia", title: "GNU Prolog", href: "https://en.wikipedia.org/wiki/GNU_Prolog" },
        { kind: "homepage", title: "www.gprolog.org", href: "http://www.gprolog.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/2/22/Heckert_GNU_white.svg" }],
      references: { developers: [{ href: "http://cri-dist.univ-paris1.fr/diaz/", title: "Daniel Diaz's Home Page" }] },
      releases: [{ version: "1.5.0", date: "2021-07-08", kind: "stable" }],
    },
    { licenses: ["lic+gpl", "lic+lgpl"], people: [["person+daniel-diaz", "developer"]] },
  );

  /**/
}
