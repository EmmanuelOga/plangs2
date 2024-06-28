import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+maxima",
    "Maxima",
    {
      name: "Maxima",
      websites: [
        { kind: "wikipedia", title: "Maxima", href: "https://en.wikipedia.org/wiki/Maxima_(software)" },
        { kind: "homepage", title: "maxima.sourceforge.io", href: "https://maxima.sourceforge.io/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Maxima-new.svg" }],
      releases: [
        { version: "unknown", date: "1982-01-01", kind: "first" },
        { version: "5.47.0", date: "2023-01-01", kind: "stable" },
      ],
      references: {
        stable_release: [
          { href: "https://sourceforge.net/p/maxima/mailman/message/37852344/", title: "Announcing 5.47.0" },
        ],
      },
    },
    { licenses: ["lic+gpl"] },
  );
}
