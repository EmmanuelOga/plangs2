import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+smallbasic",
    "SmallBasic",
    {
      name: "SmallBasic",
      websites: [
        { kind: "wikipedia", title: "SmallBASIC", href: "https://en.wikipedia.org/wiki/SmallBasic" },
        { kind: "repository", title: "smallbasic.github.io", href: "https://smallbasic.github.io" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/2/22/Smallbasic-screenshot-3spiros.png" },
      ],
      references: { stable_release: [{ href: "https://smallbasic.github.io", title: "Browse Files for SmallBASIC" }] },
      releases: [{ version: "12.27", date: "2024-04-26", kind: "stable" }],
      extensions: [".bas"],
    },
    { implementations: ["pl+basic"], influenced: ["pl+qbasic"], licenses: ["lic+gpl3"] },
  );

  /**/
}
