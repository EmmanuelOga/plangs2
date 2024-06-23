import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+pari-slashgp",
    "PARI/GP",
    {
      name: "PARI/GP",
      websites: [
        { kind: "wikipedia", title: "PARI/GP", href: "https://en.wikipedia.org/wiki/PARI/GP" },
        { kind: "homepage", title: "pari.math.u-bordeaux.fr", href: "http://pari.math.u-bordeaux.fr/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/26/PARI-GP_logo.svg" }],
      references: {
        stable_release: [
          {
            href: "https://pari.math.u-bordeaux.fr/archives/pari-announce-24/msg00000.html",
            title: "pari-2.15.5 (STABLE) released",
          },
        ],
      },
      releases: [{ version: "2.15.5", date: "2024-01-01", kind: "stable" }],
    },
    { licenses: ["lic+gpl"], people: [["person+henri-cohen", "designer"]] },
  );

  /**/
}
