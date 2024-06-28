import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+gforth",
    "Gforth",
    {
      name: "Gforth",
      websites: [
        { kind: "wikipedia", title: "Gforth", href: "https://en.wikipedia.org/wiki/Gforth" },
        { kind: "homepage", title: "gnu.org/s/gforth/", href: "http://gnu.org/s/gforth/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Gforth_Logo.png" }],
      references: {
        initial_release: [
          {
            href: "http://www.complang.tuwien.ac.at/forth/gforth/Docs-html/Origin.html",
            title: "Origin - Gforth Manual",
          },
        ],
        stable_release: [
          { href: "https://www.gnu.org/software/gforth/", title: "Gforth - GNU Project - Free Software Foundation" },
        ],
      },
      releases: [
        { version: "unknown", date: "1992-01-01", kind: "first" },
        { version: "0.7.3", date: "2014-01-01", kind: "stable" },
        { version: "0.7.9", date: "2020-02-13", kind: "preview" },
      ],
    },
    { licenses: ["lic+gpl"] },
  );
}
