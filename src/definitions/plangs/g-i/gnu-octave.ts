import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+gnu-octave",
    "GNU Octave",
    {
      name: "GNU Octave",
      websites: [
        { kind: "wikipedia", title: "GNU Octave", href: "https://en.wikipedia.org/wiki/GNU_Octave" },
        { kind: "homepage", title: "gnu.org/software/octave/", href: "https://gnu.org/software/octave/" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Gnu-octave-logo.svg" }],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "1.0", date: "1993-01-01", kind: "first" },
        { version: "9.1.0", date: "2024-01-01", kind: "stable" },
      ],
    },
    { influences: ["pl+matlab"], licenses: ["lic+gpl"], people: ["person+john-w-eaton"] },
  );
}
