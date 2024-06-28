import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+csound",
    "Csound",
    {
      name: "Csound",
      websites: [
        { kind: "wikipedia", title: "Csound", href: "https://en.wikipedia.org/wiki/Csound" },
        { kind: "homepage", title: "csound.com", href: "http://csound.com" },
      ],
      references: {
        initial_release: [
          {
            href: "http://csound.com/csound30/papersessions.pdf",
            title: "Dr. Richard Boulanger - Three Decades with Csound: The Roots, Birth, and Early Years",
          },
        ],
        stable_release: [{ href: "https://github.com/csound/csound/releases", title: "Releases · csound/csound" }],
      },
      releases: [
        { version: "unknown", date: "1986-01-01", kind: "first" },
        { version: "6.18.1", date: "2022-11-24", kind: "stable" },
      ],
    },
    { licenses: ["lic+lgpl"] },
  );
}
