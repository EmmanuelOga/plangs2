import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+gnu-e",
    {
      name: "GNU E",
      websites: [
        { kind: "wikipedia", title: "GNU E", href: "https://en.wikipedia.org/wiki/GNU_E" },
        { kind: "homepage", title: "ftp://ftp.cs.wisc.edu/exodus/E/", href: "ftp://ftp.cs.wisc.edu/exodus/E/" },
      ],
      releases: [{ version: "2.3.3", date: "1993-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+cpp"],
      licenses: ["lic+gpl"],
      paradigms: ["para+objects"],
      platforms: ["platf+cross-platform"],
      typeSystems: ["tsys+strong"],
    },
  );
}
